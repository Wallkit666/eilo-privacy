import React from 'react'

import * as S from './sections-technologies-card.styled'

import { API } from "@configs/api"

import Link from "next/link"

export default function SectionsTechnologiesCardView({ className, data }) {
  return (
    <Link href={`/tech/${data?.attributes?.key}`}>
      <S.Container className={className}>
        <S.Content>
          <S.Preview>
            <S.Icon image={`${API}${data?.attributes?.logo?.data?.attributes?.url}`} />
          </S.Preview>

          <S.TitleContainer>
            <S.Title>{data?.attributes?.title}</S.Title>
          </S.TitleContainer>

          <S.Description>{data?.attributes?.short_description}</S.Description>
        </S.Content>
      </S.Container>
    </Link>
  )
}
