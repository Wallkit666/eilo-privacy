import React from 'react'

import {Section, TextTexture} from '@components'

import TextureSVG from "./images/texture"

import * as S from './portfolio-doing.styled'

const items = [
  {
    label: '50',
    value: '%',
    description: 'The success of the project depends directly on the management'
  },
  {
    label: '5',
    value: '+',
    description: 'Years of experience in management for each of our PMAs '
  },
  {
    label: '25',
    value: '+',
    description: 'Performance metrics for each project'
  },
  {
    label: '50',
    value: '%',
    description: 'The success of the project depends directly on the management'
  },
]

export default function PortfolioDoingView() {
  return (
      <Section theme='white'>
        <S.Container>
          <S.Info>
            <S.Title >What are we doing great? </S.Title>

            <S.Description>We know how to implement your project from idea to concrete result. Our team of business experts is ready to translate into your project the knowledge gained.</S.Description>
          </S.Info>
          
          <S.Content>
            {items.map((item, index) => (
                <S.Item data={item} key={index} />
              ))}
          </S.Content>
        </S.Container>
      </Section>
  )
}
