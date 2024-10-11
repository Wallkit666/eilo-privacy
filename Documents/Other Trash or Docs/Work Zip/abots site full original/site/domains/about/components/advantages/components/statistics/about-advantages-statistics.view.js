import React from 'react'

import * as S from './about-advantages-statistics.styled'

export default function AboutAdvantagesStatisticsView() {
  return (
    <S.Container>
      <S.Group>
        <S.Number>5+</S.Number>

        <S.Title>years experience</S.Title>
      </S.Group>

      <S.Group>
        <S.Number>200+</S.Number>

        <S.Title>projects</S.Title>
      </S.Group>

      <S.Group>
        <S.Number>30+</S.Number>

        <S.Title>specialists</S.Title>
      </S.Group>
    </S.Container>
  )
}
