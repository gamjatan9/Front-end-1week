import styled from 'styled-components'
import AnimalPost from './AnimalPost'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fakeData = [
  {
    id: 'ad',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'a2',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'a5',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad15',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad36',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad36362',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad3636',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad36365',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad36361231',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
  {
    id: 'ad3631251256',
    url: 'https://media.istockphoto.com/id/1137568153/ko/%EC%82%AC%EC%A7%84/%EB%B4%84-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EB%B2%9A%EA%BD%83.jpg?s=612x612&w=0&k=20&c=Yz6oAC1b1LspDjBamVR5jJAWtqrjDolweHYyVl3NXEs=',
  },
]

const getAnimalPictures = async () => {
  const { data } = await axios.get(
    'https://api.thecatapi.com/v1/images/search?limit=10&page=1&api_key=live_EuBp7Z9qPEbF6STfmL5iP3Hk4COXQlpFtiVACgeLQYad9dimNovVXpDy0YTBeUee',
  )
  return data
}

const AnimalPostGrid = styled.div`
  display: grid;
  height: 30rem;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
`

export default function AnimalPosts() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: getAnimalPictures,
    staleTime: 6000,
  })

  console.log(data)

  return (
    <AnimalPostGrid>
      {fakeData.map((post: any) => (
        <AnimalPost key={post.id} id={post.id} postUrl={post.url} />
      ))}
    </AnimalPostGrid>
  )
}
