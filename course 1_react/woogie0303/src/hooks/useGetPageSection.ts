import { usePageContext } from '@contexts/PageContext'
import { useEffect, useState } from 'react'
import { MAX_PAGE_COUNT, VISIBLE_PAGE_BUTTONS_NUMBER } from '@utils/Constants'

const startEndPageBtnHandler = (currentPage: number) => {
  const currentPageReminder = currentPage % VISIBLE_PAGE_BUTTONS_NUMBER
  let visiblePageStart: number
  let visiblePageEnd: number

  if (currentPageReminder === 0) {
    visiblePageStart = currentPage - VISIBLE_PAGE_BUTTONS_NUMBER
    visiblePageEnd = currentPage

    return { visiblePageStart, visiblePageEnd }
  }

  visiblePageStart = currentPage - currentPageReminder
  visiblePageEnd = currentPage + (VISIBLE_PAGE_BUTTONS_NUMBER - currentPageReminder)

  if (visiblePageEnd > MAX_PAGE_COUNT) {
    visiblePageEnd = MAX_PAGE_COUNT
  }

  return { visiblePageStart, visiblePageEnd }
}

export const useGetPageSection = () => {
  const { currentPage, nextPageSection, setNextPageSection, prevPageSection, setPrevPageSection } = usePageContext()
  const allPageBtns = Array.from({ length: MAX_PAGE_COUNT }, (_, i) => i + 1)
  const [visiblePageBtnSection, setVisiblePageBtnSection] = useState<number[]>(() => {
    const { visiblePageStart, visiblePageEnd } = startEndPageBtnHandler(currentPage)

    return [...allPageBtns.slice(visiblePageStart, visiblePageEnd)]
  })

  useEffect(() => {
    const { visiblePageStart, visiblePageEnd } = startEndPageBtnHandler(currentPage)

    if (nextPageSection) {
      setVisiblePageBtnSection(allPageBtns.slice(visiblePageStart, visiblePageEnd))
      setNextPageSection(false)
    }

    if (prevPageSection) {
      setVisiblePageBtnSection(allPageBtns.slice(visiblePageStart, visiblePageEnd))
      setPrevPageSection(false)
    }
  }, [currentPage, nextPageSection, allPageBtns, prevPageSection, setNextPageSection, setPrevPageSection])

  return visiblePageBtnSection
}
