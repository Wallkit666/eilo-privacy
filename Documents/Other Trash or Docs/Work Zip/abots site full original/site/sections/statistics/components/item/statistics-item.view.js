import React from 'react'

import * as S from './statistics-item.styled'

export default function StatisticsItemView({className, data}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.label}<S.Percent>{data.value}</S.Percent></S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
