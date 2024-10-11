import React from 'react'

import { Section, TextTexture } from '@components'
import { SectionTitle } from '@components/section'

import TextureSVG from "./images/texture"

import * as S from './sections-processes.styled'

const items = [
  {
    number: '01',
    title: 'Technical specification',
    description: 'The terms of reference are fundamental in any project that we develop. In the presence of documentation processes, the client is always protected in the issue of the scope of implemented tasks and the details of the implementation of features.'
  },
  {
    number: '02',
    title: 'Approval of conditions before the start',
    description: 'Before the start of any work, our manager discusses the list of tasks that will be taken into work, the cost and timing of implementation. Thus, the scenario of unpleasant "surprises" is excluded for the client.'
  },
  {
    number: '03',
    title: 'Legal certainty',
    description: 'Our legal department has a wide range of ready-made contracts for various types of software, as well as NDAs. An important legal issue will be resolved as soon as possible with maximum protection for the client in various situations.'
  },
]

export default function SectionsProcessesView() {
  return (
    <Section
      theme='white'
      TitleComponent={<SectionTitle>Our <TextTexture width={280} height={10} IconComponent={TextureSVG}>processes</TextTexture> are our gold</SectionTitle>}
      offsetBottomSize="large"
      offsetTopSize="large"
    >
      <S.Container>
        <S.Content>
          {items.map((item, index) => (
            <S.Card data={item} key={index} />
          ))}
        </S.Content>
      </S.Container>
    </Section>

  )
}
