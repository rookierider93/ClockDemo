import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const logEndOfMinute = () => {
    if (time.getSeconds() === 0) {
      console.log("Minute ended");
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(logEndOfMinute);
    };
  }, []);

  useEffect(() => {
    logEndOfMinute();
  }, [time]);

  return (
    <>
      <div className="border border-primary">
        <h2>Clock</h2>
        <label>
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </label>
      </div>
    </>
  );
};

export default Clock;
