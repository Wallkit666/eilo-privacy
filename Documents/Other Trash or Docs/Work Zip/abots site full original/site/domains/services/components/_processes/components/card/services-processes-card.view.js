import React from 'react'

import * as S from './services-processes-card.styled'

export default function ServicesProcessesCardView({className, data}) {
  return (
    <S.Container className={className}>
      <S.Number>{data.number}</S.Number>

      <S.Title>{data.title}</S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
