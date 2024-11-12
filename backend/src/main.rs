use actix_web::{web, App, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;

#[derive(Serialize, Deserialize)]
struct Timer {
    duration: u64,
    remaining: u64,
}

struct AppState {
    timer: Mutex<Timer>,
}

async fn get_timer(data: web::Data<AppState>) -> impl Responder {
    let timer = data.timer.lock().unwrap();
    web::Json(timer.clone())
}

async fn set_timer(data: web::Data<AppState>, new_timer: web::Json<Timer>) -> impl Responder {
    let mut timer = data.timer.lock().unwrap();
    *timer = new_timer.into_inner();
    web::Json(timer.clone())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let timer = Timer {
        duration: 25 * 60,
        remaining: 25 * 60,
    };

    let data = web::Data::new(AppState {
        timer: Mutex::new(timer),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(data.clone())
            .route("/timer", web::get().to(get_timer))
            .route("/timer", web::post().to(set_timer))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
