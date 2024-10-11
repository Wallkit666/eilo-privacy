import React from 'react'

import * as S from './button.styled'

export default function ButtonView({className, theme, title, size, onClick}) {
  return (
    <S.Container size={size} theme={theme} className={className} onClick={onClick}>
      <S.Title theme={theme}>{title}</S.Title>
    </S.Container>
  )
}
