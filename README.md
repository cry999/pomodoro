# pomodoro

## Backend

The backend is implemented in Rust using the Actix-web framework.

### Setup

1. Install Rust from [rust-lang.org](https://www.rust-lang.org/).
2. Navigate to the `backend` directory.
3. Run `cargo build` to build the project.
4. Run `cargo run` to start the server.

The server will be running at `http://127.0.0.1:8080`.

### Endpoints

- `GET /timer`: Get the current timer.
- `POST /timer`: Set a new timer.

## Frontend

The frontend is implemented using Vite, React, and TypeScript.

### Setup

1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Navigate to the `frontend` directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.

The development server will be running at `http://localhost:3000`.

### Build

To build the frontend for production, run `npm run build`. The build output will be in the `frontend/dist` directory.
