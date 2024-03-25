import { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [btnName, setbtnName] = useState("Start");
  const intervalRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      const now = Date.now();
      intervalRef.current = window.setInterval(() => {
        setElapsedTime((prev) => prev + (Date.now() - startTime) / 1000);
        setStartTime(Date.now());
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, startTime]);

  function handleStart() {
    if (btnName === "Start") {
      setStartTime(Date.now());
      setIsRunning(true);
      setbtnName((curr) => (curr = "Stop"));
    } else {
      setbtnName((curr) => (curr = "Start"));
      setIsRunning(false);
    }
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedTime(0);
  }
  return (
    <div className="border border-primary p-3">
      <h2>Stopwatch</h2>
      <h2>{elapsedTime.toFixed(2)}s</h2>
      <button className="btn btn-primary m-3" onClick={handleStart}>
        {btnName}
      </button>
      <button className="btn btn-primary m-3" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default Timer;
