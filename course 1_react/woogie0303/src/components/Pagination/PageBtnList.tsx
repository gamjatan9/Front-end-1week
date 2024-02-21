import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePageContext } from 'contexts/PageContext'
import { MAX_PAGE_COUNT, VISIBLE_PAGE_BUTTONS_NUMBER } from 'utils/Constants'
import PagesBtn from './PageBtn'

const PageListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default function PageBtnList() {
  const { currentPage, nextPageSection, setNextPageSection, prevPageSection, setPrevPageSection } = usePageContext()
  const pageBtns = Array.from({ length: MAX_PAGE_COUNT }, (_, i) => i + 1)
  const [visiblePageBtns, setVisiblePageBtns] = useState<number[]>([...pageBtns.slice(0, VISIBLE_PAGE_BUTTONS_NUMBER)])

  useEffect(() => {
    const START_NEXT_PAGE_SECTION = currentPage - 1
    const END_NEXT_PAGE_SECTION =
      START_NEXT_PAGE_SECTION + VISIBLE_PAGE_BUTTONS_NUMBER > pageBtns.length
        ? pageBtns.length + 1
        : START_NEXT_PAGE_SECTION + VISIBLE_PAGE_BUTTONS_NUMBER
    const START_PREV_PAGE_SECTION = currentPage - VISIBLE_PAGE_BUTTONS_NUMBER
    const END_PREV_PAGE_SECTION = currentPage

    if (nextPageSection) {
      setVisiblePageBtns(pageBtns.slice(START_NEXT_PAGE_SECTION, END_NEXT_PAGE_SECTION))
      setNextPageSection(false)
    }

    if (prevPageSection) {
      setVisiblePageBtns(pageBtns.slice(START_PREV_PAGE_SECTION, END_PREV_PAGE_SECTION))
      setPrevPageSection(false)
    }
  }, [currentPage, nextPageSection, pageBtns, prevPageSection, setNextPageSection, setPrevPageSection])

  return (
    <PageListWrapper>
      {visiblePageBtns.map(visiblePageBtn => (
        <PagesBtn key={visiblePageBtn} visiblePageBtnNum={visiblePageBtn} />
      ))}
    </PageListWrapper>
  )
}
