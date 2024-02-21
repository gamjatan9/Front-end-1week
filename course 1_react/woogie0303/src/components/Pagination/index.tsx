import React, { useEffect } from 'react'
import styled from 'styled-components'
import { usePageContext } from 'contexts/PageContext'
import { usePageMoveBtn } from 'hooks/usePageMoveBtn'
import PageBtnList from './PageBtnList'

const PaginationContainer = styled.div<{ $btnprevdisabled: boolean; $btnnextdisabled: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 3rem;

  & button {
    background-color: #4ca6ff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }

  & button:first-child {
    background-color: ${props => (props.$btnprevdisabled ? '#8290a0' : '#4ca6ff')};
  }

  & button:last-child {
    background-color: ${props => (props.$btnnextdisabled ? '#8290a0' : '#4ca6ff')};
  }
`

function Pagination() {
  const { currentPage } = usePageContext()
  const { handleMovePage } = usePageMoveBtn()

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(currentPage))
  }, [currentPage])

  return (
    <PaginationContainer $btnprevdisabled={currentPage <= 1} $btnnextdisabled={currentPage >= 20}>
      <button disabled={currentPage <= 1} type="button" onClick={() => handleMovePage('prev')}>
        이전
      </button>
      <PageBtnList />
      <button disabled={currentPage >= 20} type="button" onClick={() => handleMovePage('next')}>
        다음
      </button>
    </PaginationContainer>
  )
}

export default Pagination
