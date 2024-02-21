import * as S from '@styles/components/AnimalPosts'

export const AnimalPostSkeleton = () => {
  const fallbackItem = Array.from({ length: 10 }, (_, i) => i + 1)
  return (
    <S.AnimalPostGridContainer>
      {fallbackItem.map(item => (
        <S.AnimalPostWrapper key={item}>
          <S.AnimialPostSkeleton />
        </S.AnimalPostWrapper>
      ))}
    </S.AnimalPostGridContainer>
  )
}
