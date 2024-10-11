import React from 'react'

import * as S from './tech-header.styled'

import TechHeaderItem from './components/item'

export default function TechHeaderView({ data, menuItems }) {
  return (
    <S.Container>
      <TechHeaderItem data={data} />

      <S.Menu items={menuItems} title={data?.used} />
    </S.Container>
  )
}
