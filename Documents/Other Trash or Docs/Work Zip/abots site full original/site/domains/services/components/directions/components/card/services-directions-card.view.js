import React from 'react'

import * as S from './services-directions-card.styled'

import Link from "next/link"

import { API } from "@configs/api"

export default function ServicesDirectionsCardView({ data, className }) {
  return (
    <Link href={`/services/${data?.attributes?.key}`}>
      <S.Container className={className}>
        <S.Info>
          <S.Title>{data?.attributes?.title}</S.Title>
        </S.Info>

        <S.Content>
          <S.Preview image={`${API}${data?.attributes?.preview?.data?.attributes?.url}`} />

          <S.Meta>
            <S.Tags items={data?.attributes?.Tags} />

            <S.Description>{data?.attributes?.description}</S.Description>
          </S.Meta>
        </S.Content>
      </S.Container>
    </Link>
  )
}
