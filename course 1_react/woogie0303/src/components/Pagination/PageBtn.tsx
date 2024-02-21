import { usePageContext } from 'contexts/PageContext'
import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

type Props = {
  visiblePageBtnNum: number
}

const PageBtnItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$active ? '#4ca6ff' : '')};
  color: ${props => (props.$active ? 'white' : '#c6c9e1')};
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`

export default function PageBtn({ visiblePageBtnNum }: Props) {
  const { currentPage, setCurrentPage } = usePageContext()
  const handlePageBtn: MouseEventHandler = e => {
    const target = e.target as HTMLLIElement
    const targetValue = Number.parseInt(target.textContent as string, 10)
    setCurrentPage(targetValue)
  }
  return (
    <PageBtnItem $active={currentPage === visiblePageBtnNum} onClick={handlePageBtn}>
      {visiblePageBtnNum}
    </PageBtnItem>
  )
}
