import React from 'react'
import styled from 'styled-components';
import { Count, Count2 } from '../components/useRef/index.js'

const StudyingUseRef = () => {
  return (
    <Wrapper>
      <Section>
        <Title>useRefの構文</Title>
        <CordZone>const refオブジェクト = useRef(初期値);</CordZone>
        <p>useRefの引数に渡した値がrefオブジェクトのcurrentプロパティの値になる。</p>
      </Section>


      <Section>
        <Title>useRefとは？</Title>
        <p>refオブジェクト（React.createRefの戻り値）を返すフック</p>
        <p>refオブジェクトを利用することでDOMの参照やコンポーネント内で値を保持できる</p>
        <p>「値を保持する」という点に関してはuseStateと同じ。しかしuseStateとは異なりuseRefで生成した値を更新してもコンポーネントは再レンダーされない</p>
        <p>レンダーには関係ないstateを扱いたい時（コンポーネント内で値を保持したいが値を更新してもコンポーネントを再レンダーしたくない時）などに利用する</p>
        <p></p>
      </Section>

      <Section>
        <Title>useRefの利用例</Title> 
        <Count />
      </Section>

      <Section>
        <Title>useRefの利用例2</Title> 
        <Count2 />
      </Section>

    </Wrapper>
  )
}

export default StudyingUseRef


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