import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePageContext } from 'contexts/PageContext'
import PageBtnList from './PageBtnList'

type BtnClickType = 'prev' | 'next'

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
  const { currentPage, setCurrentPage } = usePageContext()
  const [nextPageSection, setNextPageSection] = useState(false)
  const [prevPageSection, setPrevPageSection] = useState(false)
  const handleMovePage = (btnClick: BtnClickType) => {
    if (btnClick === 'next') {
      setCurrentPage(pre => pre + 1)
    }

    if (btnClick === 'prev') {
      setCurrentPage(pre => pre - 1)
    }

    if (btnClick === 'next' && currentPage % 5 === 0) {
      setNextPageSection(true)
    }

    if (btnClick === 'prev' && currentPage % 5 === 1) {
      setPrevPageSection(true)
    }
  }

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(currentPage))
  }, [currentPage])

  return (
    <PaginationContainer $btnprevdisabled={currentPage <= 1} $btnnextdisabled={currentPage >= 20}>
      <button disabled={currentPage <= 1} type="button" onClick={() => handleMovePage('prev')}>
        이전
      </button>
      <PageBtnList
        setNextPageSection={setNextPageSection}
        setPrevPageSection={setPrevPageSection}
        nextPageSection={nextPageSection}
        prevPageSection={prevPageSection}
      />
      <button disabled={currentPage >= 20} type="button" onClick={() => handleMovePage('next')}>
        다음
      </button>
    </PaginationContainer>
  )
}

export default Pagination
