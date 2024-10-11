import React from 'react'

import { Section } from '@components'
import { SectionTitle } from '@components/section'

import * as S from './sections-technologies.styled'

export default function SectionsTechnologiesView({ data, title }) {
  return (
    <Section theme='dark' TitleComponent={<SectionTitle theme="dark">{title}</SectionTitle>}>
      <S.Container>
        <S.Content>
          {data?.map((item) => (
            <S.Card data={item} key={item?.id} />
          ))}
        </S.Content>
      </S.Container>
    </Section>
  )
}
