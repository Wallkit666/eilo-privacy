import React from 'react'

import * as S from './menu.styled'

export default function TechHeaderMenuView({ items, title, className, onSelect }) {
  return (
    <S.Container isPaddingVertical className={className}>
      <S.Section theme="transparent">
        {!!title && <S.Title>{title}</S.Title>}

        <S.Menu>
          {items.map((item, index) => (
            <S.Item data={item} key={index} onClick={() => onSelect(item)} />
          ))}
        </S.Menu>
      </S.Section>
    </S.Container>
  )
}
