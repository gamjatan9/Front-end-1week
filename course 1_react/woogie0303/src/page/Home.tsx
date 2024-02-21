import React from 'react'
import Pagination from 'components/Pagination'
import PageContextProvider from 'contexts/PageContext'
import AnimalPosts from '../components/AnimalPosts'
import * as S from '@/styles/pages/Home'

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
