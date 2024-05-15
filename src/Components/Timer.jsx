import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <div className="display">{formatTime(time)}</div>
      <div>
        <button onClick={startTimer} disabled={isRunning} className="start">
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning} className="stop">
          Stop
        </button>
        <button onClick={resetTimer} disabled={!time} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
