import Pagination from '@components/Pagination'
import PageContextProvider from '@contexts/PageContext'
import * as S from '@styles/pages/Home'
import AnimalPosts from '../components/AnimalPosts'

export default function Home() {
  return (
    <PageContextProvider>
      <S.HomeLayout>
        <AnimalPosts />
        <Pagination />
      </S.HomeLayout>
    </PageContextProvider>
  )
}
