import React from 'react'

import { Section } from '@components'

import * as S from './statistics.styled'

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
]

export default function StatisticsView() {
  return (
    <Section theme='dark' offsetBottomSize="extra-small" offsetTopSize="extra-small">
      <S.Container>
        {items.map((item, index) => (
          <S.Item data={item} key={index} />
        ))}
      </S.Container>
    </Section>
  )
}