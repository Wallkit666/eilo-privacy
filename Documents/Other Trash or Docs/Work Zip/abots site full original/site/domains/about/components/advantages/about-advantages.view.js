import React from 'react'

import { Section } from '@components'

import AboutAdvantagesStatistics from './components/statistics'

import * as S from './about-advantages.styled'

export default function AboutAdvantagesView() {
  return (
    <Section theme='white'>
      <S.Container>

        <S.Title>Our history</S.Title>
        {/* <S.Group> */}
        <S.Group>
          <S.Prewiew />

          <S.Content>
            <S.Description>The history of our company began in 2017, when we needed to solve our own IT tasks and decided that we could be useful to many clients in the world</S.Description>
            <S.Description>We opened an office in Nikolaev for a small team of specialists.</S.Description>
            <S.Description>The COVI19 pandemic changed the world and remote work became the norm and the IT services market was waiting for a new round of development. </S.Description>
            <S.Description>Our company grew and now we have more than 30 top IT experts in our team.</S.Description>
            <S.Description>Recent events in Ukraine led our company to transform and representative offices were organized in Europe and Switzerland.</S.Description>
            <S.Description>A-Bots stands for innovation and customer friendliness.</S.Description>
            <S.Description>As a result of qualitative management and teamwork we realized more than 200 projects of different complexity for different businesses.</S.Description>


            {/* The COVI19 pandemic changed the world and remote work became the norm and the IT services market was waiting for a new round of development.
            Our company grew and now we have more than 30 top IT experts in our team.
            Recent events in Ukraine led our company to transform and representative offices were organized in Europe and Switzerland.
            A-Bots stands for innovation and customer friendliness.
As a result of qualitative management and teamwork we realized more than 200 projects of different complexity for different businesses. */}
            {/* </S.Description> */}
          </S.Content>
        </S.Group>

        <AboutAdvantagesStatistics />
      </S.Container>
    </Section>
  )
}
