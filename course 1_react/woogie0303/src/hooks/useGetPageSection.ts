import { usePageContext } from 'contexts/PageContext'
import { useEffect, useState } from 'react'
import { MAX_PAGE_COUNT, VISIBLE_PAGE_BUTTONS_NUMBER } from 'utils/Constants'

export const useGetPageSection = () => {
  const { currentPage, nextPageSection, setNextPageSection, prevPageSection, setPrevPageSection } = usePageContext()
  const allPageBtns = Array.from({ length: MAX_PAGE_COUNT }, (_, i) => i + 1)
  const [visiblePageBtnSection, setVisiblePageBtnSection] = useState<number[]>([
    ...allPageBtns.slice(0, VISIBLE_PAGE_BUTTONS_NUMBER),
  ])

  useEffect(() => {
    const START_NEXT_PAGE_SECTION = currentPage - 1
    const END_NEXT_PAGE_SECTION =
      START_NEXT_PAGE_SECTION + VISIBLE_PAGE_BUTTONS_NUMBER > allPageBtns.length
        ? allPageBtns.length + 1
        : START_NEXT_PAGE_SECTION + VISIBLE_PAGE_BUTTONS_NUMBER
    const START_PREV_PAGE_SECTION = currentPage - VISIBLE_PAGE_BUTTONS_NUMBER
    const END_PREV_PAGE_SECTION = currentPage

    if (nextPageSection) {
      setVisiblePageBtnSection(allPageBtns.slice(START_NEXT_PAGE_SECTION, END_NEXT_PAGE_SECTION))
      setNextPageSection(false)
    }

    if (prevPageSection) {
      setVisiblePageBtnSection(allPageBtns.slice(START_PREV_PAGE_SECTION, END_PREV_PAGE_SECTION))
      setPrevPageSection(false)
    }
  }, [currentPage, nextPageSection, allPageBtns, prevPageSection, setNextPageSection, setPrevPageSection])

  return visiblePageBtnSection
}
