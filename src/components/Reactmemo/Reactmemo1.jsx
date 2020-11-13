import React, { useState } from 'react'

const Child = ({ count }) => {
  console.log('render Child');
  return <p>Child: {count}</p>;
}

const Reactmemo1 = () => {
  console.log('render Reactmemo1');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup reactmemo1 count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup child count</button>
      <p>Reactmemo1: {count1}</p>
      <Child count={count2} />
    </>
  )
}

export default Reactmemo1
