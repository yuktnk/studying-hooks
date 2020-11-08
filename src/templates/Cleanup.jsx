import React, { useState, useEffect } from 'react'

const LIMIT = 5;

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(5);
  }

  const tick = () => {
    console.log("tick");
    setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1))
  }

  useEffect(() => {
    console.log("create Timer");
    const timerId = setInterval(tick, 1000);
    return () => {
      console.log("cleanup Timer");
      clearInterval(timerId);
    };
  }, [])

  return (
    <div>
      <p>time: {timeLeft}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}


const Cleanup = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>toggle Timer</button>
      {visible ? <Timer /> : ""}
    </div>
  )
}

export default Cleanup
