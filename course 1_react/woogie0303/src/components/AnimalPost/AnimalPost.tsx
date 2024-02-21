import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string
  postUrl: string
}

const AnimalPostWrapper = styled.div`
  height: 10rem;
  img {
    border-radius: 2rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export default function AnimalPost({ postUrl, id }: Props) {
  return (
    <AnimalPostWrapper>
      <img src={postUrl} alt={id} />
    </AnimalPostWrapper>
  )
}
