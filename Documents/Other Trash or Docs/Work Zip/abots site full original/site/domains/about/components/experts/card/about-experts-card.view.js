import React from 'react'

import * as S from './about-experts-card.styled'

import { API } from "@configs/api"

export default function AboutExpertsCardView({ data }) {
  return (
    <S.Container>
      <S.Icon image={`${API}${data?.avatar?.data?.attributes?.url}`} />

      <S.Content>
        <S.Name>{data?.name}</S.Name>

        <S.Profession>{data?.position}</S.Profession>
      </S.Content>
    </S.Container>
  )
}
