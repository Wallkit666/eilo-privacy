import React from 'react'

import { Section } from '@components'

import * as S from './tech-management.styled'

const items = [
  {
    title: 'Dedicated manager',
    description: 'Each project is assigned a responsible Project Manager, who participates in the collection of requirements, the process of creating a technical specification, the development of each stage, QA and stabilization.'
  },
  {
    title: 'The manager is your friend',
    description: 'Each project manager has the main goal - to make the client happy through a high level of understanding and communication. You can share absolutely any idea and thought with the manager.'
  },
  {
    title: 'Agile methodology',
    description: 'One of the most important tasks of a project manager is to control the delivery of a high-quality digital product - this is achieved through competent iteration planning, constant filling of the backlog and the use of custom task-tracking systems. The productivity of the team can be seen not only in the final product, but also in the figures of the reports.'
  },
]

export default function TechManagementView() {
  return (
    <Section theme='white' title='Management'>
      <S.Container>
        <S.Content>
          {items.map((item, index) => (
            <S.Card data={item} key={index} />
          ))}

        </S.Content>

        <S.Preview src='/images/management.png' />
      </S.Container>
    </Section>
  )
}
