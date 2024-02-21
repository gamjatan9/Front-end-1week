import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import * as S from '@styles/components/AnimalPosts'
import { usePageContext } from '@contexts/PageContext'
import AnimalPost from './AnimalPost'

const axiosAnimalApi = axios.create({
  baseURL: process.env.REACT_APP_ANIMAL_API,
  headers: {
    'x-api-key': process.env.REACT_APP_ANIMAL_API_KEY,
  },
})

const fetchAnimalPost = async (currentPage: number) => {
  const { data } = await axiosAnimalApi.get<AnimalPostType[]>(`${currentPage}`)

  return data
}

export default function AnimalPosts() {
  const { currentPage } = usePageContext()
  const { data } = useQuery({
    queryKey: ['animalPicture', currentPage],
    queryFn: () => fetchAnimalPost(currentPage),
    staleTime: 4 * (1000 * 60),
    throwOnError: true,
  })

  return (
    <S.AnimalPostGridContainer>
      {data?.map(post => <AnimalPost key={post.id} id={post.id} postUrl={post.url} />)}
    </S.AnimalPostGridContainer>
  )
}
