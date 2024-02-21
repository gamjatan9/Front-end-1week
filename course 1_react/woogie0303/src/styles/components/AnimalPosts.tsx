import styled from 'styled-components'

export const AnimalPostGridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

export const AnimalPostWrapper = styled.div`
  height: 10rem;
  img {
    border-radius: 2rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
