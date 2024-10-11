import React from 'react'

import * as S from './portfolio-doing-card.styled'

export default function PortfolioDoingCardView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.label}<S.Unit>{data.value}</S.Unit></S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
