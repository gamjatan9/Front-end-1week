import React from 'react'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
import PageContextProvider from 'contexts/PageContext'
import AnimalPosts from '../components/AnimalPost/AnimalPosts'

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <PageContextProvider>
      <HomeLayout>
        <AnimalPosts />
        <Pagination />
      </HomeLayout>
    </PageContextProvider>
  )
}
