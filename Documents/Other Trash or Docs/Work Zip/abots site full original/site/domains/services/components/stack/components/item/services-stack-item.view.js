import React from 'react'

import * as S from './services-stack-item.styled'

import Link from "next/link"

import { API } from "@configs/api"

export default function ServicesStackItemView({ className, position, data, tags }) {
  return (
    <Link href={`/tech/${data?.attributes?.key}`}>
      <S.Container className={className} position={position}>
        <S.Preview>
          <S.Icon image={`${API}${data?.attributes?.logo?.data?.attributes?.url}`} />

          <S.Title>{data?.attributes?.title}</S.Title>
        </S.Preview>

        <S.Info position={position}>
          <S.Tags theme='dark' items={data?.attributes?.Tags} />

          <S.TagsMobile>{tags}</S.TagsMobile>

          <S.Description>{data?.attributes?.short_description}</S.Description>
        </S.Info>
      </S.Container>
    </Link>
  )
}
