import React from 'react'

import { Section } from '@components'
import { SectionTitle } from '@components/section'

import * as S from './principles.styled'

export default function PrinciplesView({ data }) {
  return (
    <Section
      isTexture
      TitleComponent={<SectionTitle isTexture>Our principles and tools</SectionTitle>}
      offsetBottomSize="large"
    >
      <S.Container>
        {data?.map(item => (
          <S.Item data={item.attributes} key={item?.id} />
        ))}
      </S.Container>
    </Section>
  )
}
