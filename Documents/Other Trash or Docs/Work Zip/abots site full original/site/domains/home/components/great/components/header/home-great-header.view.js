import React from 'react'

import * as S from './home-great-header.styled'

export default function HomeGreatHeaderView() {
  return (
    <S.Container>
      <S.Info>
        <S.Title>
          What are we doing great?

          <S.Icon src='/images/Illustration.png' />
        </S.Title>

        <S.Button size='big' title='Learn more' to="/services" />
      </S.Info>

      <S.Content>
        <S.Descriptions>
          <S.Description>A-BOTS specializes in software design and development, offering a full range of services to provide amazing software solutions.</S.Description>

          <S.Description>We know how to implement your project from idea to concrete result. Our team of business experts is ready to translate into your project the knowledge gained in the process of working on more than 70 projects.</S.Description>

          <S.Description> Flexibility and quality are at the core of our cooperation with you and it is we who are responsible for the level of satisfaction of your users with the software.</S.Description>
        </S.Descriptions>

        <S.Button mobile size='big' title='Learn more' />
      </S.Content>
    </S.Container>
  )
}

