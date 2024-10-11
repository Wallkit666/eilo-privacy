import React from 'react'

import * as S from './section-partners-clients-item.styled'

import { API } from "@configs/api"

export default function HomeClientsItemView({ className, data, size }) {
  return (
    <S.Container className={className}>
      <S.Image size={size} image={`${API}${data?.attributes?.url}`} />
    </S.Container>
  )
}
