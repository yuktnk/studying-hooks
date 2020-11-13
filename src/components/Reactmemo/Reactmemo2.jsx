import React, { useState } from 'react'

const Child = React.memo(({count}) => {
  console.log('render Child');
  return <p>Child: {count}</p>;
});

const Reactmemo2 = () => {
  console.log('render Reactmemo2');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup reactmemo2 count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup child count</button>
      <p>Reactmemo2: {count1}</p>
      <Child count={count2} />
    </>
  )
}

export default Reactmemo2
