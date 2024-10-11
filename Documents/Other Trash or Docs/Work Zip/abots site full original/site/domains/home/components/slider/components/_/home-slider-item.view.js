import React from 'react'

import * as S from './home-slider-item.styled'

export default function HomeSliderItemView() {
  return (
    <S.Container>
      <S.Info>
        <S.Title>Your business is unique - we know how to make it more competitive</S.Title>

        <S.Description>Analysis. Design. Development. Consulting.</S.Description>

        <S.Button size='big' title='View all cases' />
      </S.Info>

      <S.Preview />
    </S.Container>
  )
}
