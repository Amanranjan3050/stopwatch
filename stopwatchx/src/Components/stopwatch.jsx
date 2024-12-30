import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  // Format the timer to mm:ss
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Start or Stop the timer
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerId.current);
      setIsRunning(false);
    } else {
      timerId.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timerId.current);
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTimer()}</p>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
