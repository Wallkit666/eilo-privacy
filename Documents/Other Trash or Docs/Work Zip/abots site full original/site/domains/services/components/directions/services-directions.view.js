import React from 'react'

import * as S from './services-directions.styled'

export default function ServicesDirectionsView({ data }) {
  return (
    <S.Section theme='white' title='Our directions'>
      <S.Container>
        {data?.map(item => (
          <S.Card data={item} key={item?.id} />
        ))}
      </S.Container>
    </S.Section>
  )
}
