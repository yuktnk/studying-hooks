import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Title = styled.h2({
})
const CordZone = styled.p({
    color: 'white',
    backgroundColor: '#161b20',
    display: 'inline',
    padding: 16
})

const StudyingState = () => {

  const [count, setCount] = useState(10);
  const increment = () => {
    setCount((currentCount) => currentCount + 1)
  };
  const decrement = () => {
    setCount((currentCount) => currentCount - 1)
  };


  const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 })
  const voteKinoko = () => {
    setVote({ ...vote, kinoko: vote.kinoko + 1 })
  }
  const voteTakenoko = () => {
    setVote({ ...vote, takenoko: vote.takenoko + 1 })
  }


  const [items, setItems] = useState([{name: "きのこ"}]);
  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    };
    setItems([...items, newItem])
  }
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  }



  return (
    <div>
      <Title>useState基本構文</Title>
      <CordZone>
        const [state, state更新関数] = useState(stateの初期値);
      </CordZone>

      <h3>setStateに関数を渡す</h3>
      <p>Count: {count}</p>
      <Button variant="contained" onClick={increment}>+</Button>
      <Button variant="contained" onClick={decrement}>-</Button>

      <h3>useStateでオブジェクトを扱う</h3>
      <p>きのこ：{vote.kinoko}票</p>
      <p>たけのこ：{vote.takenoko}票</p>
      <Button variant="contained" onClick={voteKinoko}>きのこに1票</Button>
      <Button variant="contained" onClick={voteTakenoko}>たけのこに1票</Button>
    
      <h3>useStateで配列を扱う</h3>
      <Button variant="contained" onClick={addItem}>
        「きのこ」か「たけのこ」を追加
      </Button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <Button variant="contained" onClick={() => deleteItem(index)}>削除</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudyingState
