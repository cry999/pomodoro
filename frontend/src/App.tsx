import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [duration, setDuration] = useState(25 * 60);
  const [remaining, setRemaining] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remaining > 0) {
      timer = setTimeout(() => {
        setRemaining(remaining - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, remaining]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemaining(duration);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div>
        <span>{Math.floor(remaining / 60)}:</span>
        <span>{remaining % 60 < 10 ? `0${remaining % 60}` : remaining % 60}</span>
      </div>
      <div>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;
