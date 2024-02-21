import React, { useEffect } from 'react'

import { usePageContext } from 'contexts/PageContext'
import { usePageMoveBtn } from 'hooks/usePageMoveBtn'
import PageBtnList from './PageBtnList'

import * as S from '@/styles/components/Pagination'

function Pagination() {
  const { currentPage } = usePageContext()
  const { handleMovePage } = usePageMoveBtn()

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(currentPage))
  }, [currentPage])

  return (
    <S.PaginationContainer $btnprevdisabled={currentPage <= 1} $btnnextdisabled={currentPage >= 20}>
      <button disabled={currentPage <= 1} type="button" onClick={() => handleMovePage('prev')}>
        이전
      </button>
      <PageBtnList />
      <button disabled={currentPage >= 20} type="button" onClick={() => handleMovePage('next')}>
        다음
      </button>
    </S.PaginationContainer>
  )
}

export default Pagination
