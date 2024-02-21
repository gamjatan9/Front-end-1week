import { usePageContext } from '@contexts/PageContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

export const useGetAnimalPicture = () => {
  const { currentPage } = usePageContext()
  const { data } = useQuery({
    queryKey: ['animalPicture', currentPage],
    queryFn: () => fetchAnimalPost(currentPage),
    staleTime: 4 * (1000 * 60),
    throwOnError: true,
    retry: 0,
  })

  return data
}
