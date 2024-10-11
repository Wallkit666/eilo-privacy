import React from 'react'

import * as S from './tags.styled'

export default function TagsView({ className, theme, items }) {
  return (
    <S.Container className={className}>
      {items.map(item => (
        <S.Item theme={theme} key={item?.id}>
          <S.Title>{item?.title}</S.Title>
        </S.Item>
      ))}
    </S.Container>
  )
}
