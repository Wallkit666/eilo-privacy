import React from 'react'

import { SectionTitle } from "@components/section"

import * as S from './tech-header-item.styled'

import { API } from "@configs/api"

export default function TecgHeaderItemView({ data }) {
  return (
    <S.Section isPaddingVertical={false} >
      <S.Container>
        <S.Content>
          <SectionTitle size="large">{data.title}</SectionTitle>

          <S.Description size="large">Technology</S.Description>

          <S.Preview image={`${API}${data?.logo?.data?.attributes?.url}`} />
        </S.Content>
      </S.Container>
    </S.Section>
  )
}
