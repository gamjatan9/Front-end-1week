import { useGetPageSection } from 'hooks/useGetPageSection'
import PagesBtn from './PageBtn'
import * as S from '@/styles/components/Pagination'

export default function PageBtnList() {
  const visiblePageBtnSection = useGetPageSection()

  return (
    <S.PageListWrapper>
      {visiblePageBtnSection.map(visiblePageBtn => (
        <PagesBtn key={visiblePageBtn} visiblePageBtnNum={visiblePageBtn} />
      ))}
    </S.PageListWrapper>
  )
}
