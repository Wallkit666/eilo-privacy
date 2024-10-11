import React from 'react'

import { Section, TextTexture } from '@components'

import TextureSVG from "./images/texture"

import * as S from './services-processes.styled'

const items = [
  {
    number: '01',
    title: 'Full-service and in-house',
    description: 'We can run your project from start to finish without involving any remote contractors. Product designers, QA specialists, developers, business analysts — they will all work together, side by side (literally), ensuring smooth teamwork.'
  },
  {
    number: '02',
    title: 'Full-service and in-house',
    description: 'We can run your project from start to finish without involving any remote contractors. Product designers, QA specialists, developers, business analysts — they will all work together, side by side (literally), ensuring smooth teamwork.'
  },
  {
    number: '03',
    title: 'Full-service and in-house',
    description: 'We can run your project from start to finish without involving any remote contractors. Product designers, QA specialists, developers, business analysts — they will all work together, side by side (literally), ensuring smooth teamwork.'
  },
]

export default function ServicesProcessesView() {
  return (
    <Section theme='white' title={<>Our <TextTexture IconComponent={TextureSVG}>processes</TextTexture> are our gold</>} offsetBottomSize="large" offsetTopSize="large">
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
