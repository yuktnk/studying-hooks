import React, { useState } from 'react'
import { Button, makeStyles  } from '@material-ui/core';
import styled from 'styled-components';



const StudyingUseState = () => {
  // 1,
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount((currentCount) => currentCount + 1)
  };
  const decrement = () => {
    setCount((currentCount) => currentCount - 1)
  };
  const recetCount = () => {
    setCount(10)
  };

  // 2,
  const [usa, setUsa] = useState({ Trump: 0, Biden: 0})

  const voteTrump = () => {
    setUsa({ ...usa, Trump: usa.Trump + 1 })
    if (usa.Trump > 1 ) {
      alert('トランプが当選しました！')
    }
  }
  const voteBiden = () => {
    setUsa({ ...usa, Biden: usa.Biden + 1 })
    if (usa.Biden > 1 ) {
      alert('バイデンが当選しました！')
    }
  }

  // 2,
  const [vote, setVote] = useState({ React: 0, Vue: 0, Angular: 0 })
  const voteReact = () => {
    setVote({ ...vote, React: vote.React + 1 })
  }
  const voteVue = () => {
    setVote({ ...vote, Vue: vote.Vue + 1 })
  }
  const voteAngular = () => {
    setVote({ ...vote, Angular: vote.Angular + 1 })
  }
  const recetVote = () => {
    setVote({ ...vote, React: 0, Vue: 0, Angular: 0})
  }

  // 3,
  const [items, setItems] = useState([{name: "○"}]);
  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "○" : "×"
    };
    setItems([...items, newItem])
  }
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  }

  const classes = useStyles();


  return (
    <Wrapper>

      <Section>
        <Title>useStateの構文</Title>
        <CordZone>
          const [state, state更新関数] = useState(stateの初期値);
        </CordZone>
      </Section>

      <Section>
        <h3>アメリカの大統領選挙</h3>
        <p>Trump：{usa.Trump}票</p>
        <p>Biden：{usa.Biden}票</p>
        <Button variant="contained" onClick={voteTrump} className={classes.button}>トランプに1票</Button>
        <Button variant="contained" onClick={voteBiden} className={classes.button}>バイデンに1票</Button>
      </Section>

      <Section>
        <h3>1, setStateに関数を渡す</h3>
        <p>Count: {count}</p>
        <Button variant="contained" onClick={increment}>+1</Button>
        <Button variant="contained" onClick={decrement}>-1</Button>
        <Button variant="contained" onClick={recetCount} className={classes.button}>recet</Button>

      </Section>

      <Section>
        <h3>2, useStateでオブジェクトを扱う</h3>
        <p>React：{vote.React}票</p>
        <p>Vue：{vote.Vue}票</p>
        <p>Angular：{vote.Angular}票</p>
        <Button variant="contained" onClick={voteReact} className={classes.button}>Reactに1票</Button>
        <Button variant="contained" onClick={voteVue} className={classes.button}>Vueに1票</Button>
        <Button variant="contained" onClick={voteAngular} className={classes.button}>Angularに1票</Button>
        <Button variant="contained" onClick={recetVote} className={classes.button}>recet</Button>
      </Section>

      <Section>
        <h3>3, useStateで配列を扱う</h3>
        <Button variant="contained" onClick={addItem}>
          「○」か「×」を追加
        </Button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button variant="contained" onClick={() => deleteItem(index)}>削除</Button>
            </li>
          ))}
        </ul>
      </Section>
    </Wrapper>
  )
}

export default StudyingUseState


// Styling
const Wrapper = styled.div({
  padding: 16
})
const Section = styled.div({
  marginBottom: 40
})
const Title = styled.h2({
})
const CordZone = styled.p({
    color: 'white',
    backgroundColor: '#161b20',
    display: 'inline',
    padding: 16
})

const useStyles = makeStyles({
  button: {
    textTransform: "none"
  }
})