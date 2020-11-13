import React, { useState, useEffect, useRef } from 'react'

const Count2 = () => {
  const [count, setCount] = useState(0);

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender.current = false;
    }
  })

  return (
    <>
      <p>{isInitialRender.current ? "初回レンダー" : "再レンダー"}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default Count2
