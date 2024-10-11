import React from 'react'

import * as S from './services-specification-card.styled'

export default function ServicesSpecificationCardView({ title, className }) {
  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
