import React from 'react'

import * as S from './management-card.styled'

export default function ManagementCardView({className, data}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
