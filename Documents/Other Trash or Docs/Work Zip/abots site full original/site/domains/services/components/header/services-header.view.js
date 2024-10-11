import React from 'react'

import { Menu } from '@components';

import * as S from './services-header.styled'

const items = [
  {
    title: 'Our directions',
    to: "#directions"
  },
  {
    title: 'Tech stack',
    to: "#stack"
  },
  {
    title: 'Our processes',
    to: "#processes"
  },
  {
    title: 'Have a project in mind?',
    to: "#mind"
  },
]

export default function ServicesHeaderView() {
  return (
    <S.Container>
      <S.Section isPaddingVertical={false} theme="transparent">
        <S.Content>
          <S.Subtitle>Services</S.Subtitle>

          <S.Title>Software is a great combination between artistry and engineering</S.Title>

          <S.Tag>Bill Gates</S.Tag>
        </S.Content>
      </S.Section>

      <Menu items={items} />
    </S.Container>
  )
}
