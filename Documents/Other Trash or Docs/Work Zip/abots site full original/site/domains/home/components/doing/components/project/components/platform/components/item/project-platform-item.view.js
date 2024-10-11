import React from 'react'

import * as S from './project-platform-item.styled'

export default function ProjectPlatformItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Value>{data.value}</S.Value>
    </S.Container>
  )
}
