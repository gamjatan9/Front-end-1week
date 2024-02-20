import React from 'react'
import styled from 'styled-components'
import AnimalPosts from '../components/AnimalPost/AnimalPosts'

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;

  button {
    margin: 2rem;
    background-color: #a6d3ff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }
`

export default function Home() {
  return (
    <HomeLayout>
      <AnimalPosts />
      <ButtonWrapper>
        <button type="button">이전</button>
        <button type="button">다음</button>
      </ButtonWrapper>
    </HomeLayout>
  )
}
