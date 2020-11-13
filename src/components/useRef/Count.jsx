import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core';

const Count = () => {
  const [count, setCount] = useState(10);

  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  });



  return (
    <>
      <p>
        現在のcount: {count}, 前回のcount: {prevCountRef.current}
      </p>
      <p>
        前回のcountより{prevCountRef.current > count ? "小さい" : "大きい"}
      </p>
      <Button variant="contained" onClick={() => setCount(Math.floor(Math.random() * 11))}>
        update
      </Button>
    </>
  )
}

export default Count
