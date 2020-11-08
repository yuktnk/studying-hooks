import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

const StudyingUseEffect = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0),                // 1, 
        [items, setItems] = useState([]),               // 2, 外部APIから取得したデータ
        [inputValue, setInputValue] = useState("react"),// 2, input（入力欄）に入力した値
        [query, setQuery] = useState(inputValue),       // 2, 外部APIにリクエスト時に付与するクエリパラメータ
        [isLoading, setIsLoading] = useState(false);    // 2, ローディング状態

  // 1,
  useEffect(() => {
    console.log(document.getElementById("effectHook").innerText);
  });

  // 2,
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setItems(result.data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);


  return (
    <Wrapper>
      <Section>
        <Title>useEffectの構文</Title>
        <CordZone>useEffect(副作用, 依存配列)</CordZone>
        <p>副作用（第１引数）だけを渡す場合、コンポーネントがレンダーされた後に、副作用が毎回実行される</p>
        <p>依存配列（第２引数）も渡す場合には、初回レンダー時と、依存配列が更新されたときにも副作用が実行される</p>
        <p>依存配列（第２引数）に「[]（空の配列）」を渡した場合には、コンポーネントがレンダーされた後に1度だけ副作用が実行される</p>
        <p>副作用内で関数を返す（returnする）と、その関数はコンポーネントがアンマウントもしくは副作用が再実行した時に実行される。（クリーンアップ関数）</p>
      </Section>

      <Section>
        <h3>1, 第2引数には何も渡さず、毎回のレンダー時にlogを出力</h3>
        <p id="effectHook">You clicked {count} times</p>
        <Button variant="contained" onClick={() => setCount(count + 1)} className={classes.button}>Click</Button>
      </Section>

      <Section>
        <h3>2, 初回レンダー時と、第2引数のクエリパラメータが更新された時に外部APIからデータを取得する</h3>
        <form 
          onSubmit={(event) => {
            event.preventDefault();
            setQuery(inputValue);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button variant="contained" type="submit">検索</button>
        </form>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </Section>


    </Wrapper>
  )
}

export default StudyingUseEffect


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