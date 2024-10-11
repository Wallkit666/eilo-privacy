import { Data } from '@react-google-maps/api'
import React from 'react'

import * as S from './tech-benefit-item.styled'

export default function TechBenefitItemView({ position, className, data, last }) {
  return (
    <S.Container className={className} position={position}>
      <S.Content position={position} last={last}>
        <S.Title position={position}>{data.title}</S.Title>

        <S.Description position={position}>{data.description}</S.Description>
      </S.Content>

      <S.Indicator position={position} last={last} />

      {/* <S.Indicator position={position}>
        <S.Doth/>
      </S.Indicator> */}
    </S.Container>
  )
}
