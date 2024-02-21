import styled from 'styled-components'
import { useGetPageSection } from 'hooks/useGetPageSection'
import PagesBtn from './PageBtn'

const PageListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default function PageBtnList() {
  const visiblePageBtnSection = useGetPageSection()

  return (
    <PageListWrapper>
      {visiblePageBtnSection.map(visiblePageBtn => (
        <PagesBtn key={visiblePageBtn} visiblePageBtnNum={visiblePageBtn} />
      ))}
    </PageListWrapper>
  )
}
