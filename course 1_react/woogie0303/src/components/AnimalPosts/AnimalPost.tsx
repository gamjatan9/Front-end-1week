import React from 'react'
import * as S from '@styles/components/AnimalPosts'

type Props = {
  id: string
  postUrl: string
}

export default function AnimalPost({ postUrl, id }: Props) {
  return (
    <S.AnimalPostWrapper>
      <img src={postUrl} alt={id} />
    </S.AnimalPostWrapper>
  )
}
