import React from 'react'
import styled from 'styled-components';
import { Reactmemo1, Reactmemo2 } from '../components/Reactmemo/index.js';

const StudyingReactMemo = () => {
  return (
    <Wrapper>
      <Section>
        <Title>React.memoの構文</Title>
        <CordZone>React.memo(関数コンポーネント)</CordZone>
      </Section>

      <Section>
        <Title>React.memoとは</Title>
        <p>コンポーネント（コンポーネントのレンダー結果）をメモ化するReactのAPI</p>
        <p>（メモ化とは計算結果を保持し、それを再利用する手法のこと）</p>
      </Section>

      <Section>
        <Title>React.memoを使う目的</Title>
        <p>コンポーネントをメモ化することでコンポーネントの再レンダーをスキップできる</p>
        <p>次のようなコンポーネントの再レンダーをスキップすることで、パフォーマンスの向上を期待できる</p>
        <p>・レンダーコストが高いコンポーネント</p>
        <p>・頻繁に再レンダーされるコンポーネント内の子コンポーネント</p>
      </Section>

      <Section>
        <Title>React.memoを使う目的</Title>
        <p>コンポーネントをメモ化することでコンポーネントの再レンダーをスキップできる</p>
        <p>次のようなコンポーネントの再レンダーをスキップすることで、パフォーマンスの向上を期待できる</p>
        <p>・レンダーコストが高いコンポーネント</p>
        <p>・頻繁に再レンダーされるコンポーネント内の子コンポーネント</p>
      </Section>

      <Section>
        <Title>React.memoを使わない場合</Title>
        <Reactmemo1 />
      </Section>

      <Section>
        <Title>React.memoを使う場合</Title>
        <Reactmemo2 />
      </Section>
    </Wrapper>
  )
}

export default StudyingReactMemo

// styling
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