import { usePageContext } from 'contexts/PageContext'

type BtnClickType = 'prev' | 'next'

export const usePageMoveBtn = () => {
  const { currentPage, setCurrentPage, setPrevPageSection, setNextPageSection } = usePageContext()
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

  return { handleMovePage }
}
