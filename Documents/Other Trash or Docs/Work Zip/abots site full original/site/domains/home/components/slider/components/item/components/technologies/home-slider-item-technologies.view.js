import React from 'react'

import Link from "next/link"

import * as S from './home-slider-item-technologies.styled'

import { API } from "@configs/api"

export default function HomeSliderItemTechnologiesView({ className, items }) {
  return (
    <S.Container className={className}>
      <S.Title>Technologies used:</S.Title>

      <S.Content>
        {items?.map((item) => (
          <S.Item key={item?.id}>
            <S.Icon image={`${API}${item?.attributes?.logo?.data?.attributes?.url}`} />

            <S.Title>{item?.attributes?.title}</S.Title>
          </S.Item>
        ))}
      </S.Content>
    </S.Container>
  )
}
