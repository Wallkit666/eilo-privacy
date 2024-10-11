import React from 'react'

import * as S from './home-doing-project-collapse.styled'

export default function HomeDoingProjectCollapseView({ className, title, active, onChangeActive, children }) {
  return (
    <S.Container className={className}>
      <S.Header onClick={() => onChangeActive(!active)}>
        <S.Title>{title}</S.Title>

        <S.Arrow active={active} name="arrow-right" size={24} />
      </S.Header>

      <S.Overflow active={active}>
        <S.Content>
          {children}
        </S.Content>
      </S.Overflow>
    </S.Container>
  )
}
