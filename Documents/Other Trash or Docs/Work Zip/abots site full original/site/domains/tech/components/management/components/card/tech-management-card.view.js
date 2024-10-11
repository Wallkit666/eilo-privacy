import React from 'react'

import * as S from './tech-management-card.styled'

export default function TechManagementCardView({className, data}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
