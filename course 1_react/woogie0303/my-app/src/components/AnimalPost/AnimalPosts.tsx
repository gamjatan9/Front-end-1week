import styled from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import AnimalPost from './AnimalPost'

type Props = {
  currentPage: number
}

const AnimalPostGridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

const fetchAnimalPost = async (currentPage: number) => {
  const { data } = await axios.get<AnimalPostType[]>(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${currentPage}&api_key=live_EuBp7Z9qPEbF6STfmL5iP3Hk4COXQlpFtiVACgeLQYad9dimNovVXpDy0YTBeUee`,
  )
  return data
}

export default function AnimalPosts({ currentPage }: Props) {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['animalPicture', currentPage],
    queryFn: () => fetchAnimalPost(currentPage),
    staleTime: 4 * (1000 * 60),
    throwOnError: true,
  })

  useEffect(() => {
    const nextPage = currentPage + 1

    queryClient.prefetchQuery({
      queryKey: ['animalPicture', nextPage],
      queryFn: () => fetchAnimalPost(currentPage),
    })
  }, [currentPage, queryClient])

  return (
    <AnimalPostGridContainer>
      {data?.map(post => <AnimalPost key={post.id} id={post.id} postUrl={post.url} />)}
    </AnimalPostGridContainer>
  )
}
