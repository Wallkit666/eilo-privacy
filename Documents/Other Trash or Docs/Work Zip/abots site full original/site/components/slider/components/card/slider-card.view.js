import React from 'react'

import * as S from './slider-card.styled'

export default function SliderCardView({ className, data }) {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Name>{data?.attributes?.user}</S.Name>

        <S.Post>{data?.attributes?.position}</S.Post>

        <S.Description>{data?.attributes?.message}</S.Description>
      </S.Content>
    </S.Container>
  )
}
