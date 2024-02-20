import React, { useState } from 'react'
import styled from 'styled-components'
import AnimalPosts from '../components/AnimalPost/AnimalPosts'

type BtnClickType = 'prev' | 'next'

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div<{ $btndisabled: boolean }>`
  display: flex;

  & button {
    margin: 2rem;
    background-color: #4ca6ff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }

  & button:first-child {
    background-color: ${props => (props.$btndisabled ? '#8290a0' : '#4ca6ff')};
  }
`

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const handleMovePage = (btnClick: BtnClickType) => {
    if (btnClick === 'next') {
      setCurrentPage(pre => pre + 1)
    }

    if (btnClick === 'prev') {
      setCurrentPage(pre => pre - 1)
    }
  }

  return (
    <HomeLayout>
      <AnimalPosts currentPage={currentPage} />
      <ButtonWrapper $btndisabled={currentPage <= 0}>
        <button disabled={currentPage <= 0} type="button" onClick={() => handleMovePage('prev')}>
          이전
        </button>
        <button type="button" onClick={() => handleMovePage('next')}>
          다음
        </button>
      </ButtonWrapper>
    </HomeLayout>
  )
}
