import React from 'react'

import * as S from './principles-item.styled'

export default function PrinciplesItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Description>{data.description}</S.Description>
    </S.Container>
  )
}
