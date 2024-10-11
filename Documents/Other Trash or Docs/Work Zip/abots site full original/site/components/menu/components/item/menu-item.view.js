import React from 'react'

import * as S from './menu-item.styled'

export default function TechHeaderMenuItemView({ className, data, onClick }) {
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Title>{data.title}</S.Title>
    </S.Container>
  )
}
