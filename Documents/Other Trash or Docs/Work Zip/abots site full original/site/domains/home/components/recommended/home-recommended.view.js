import React from 'react'

import { Section, TextTexture } from '@components'

import * as S from './home-recommended.styled'

import TextureSVG from "./images/texture"

export default function HomeRecommendedView() {
  return (
    <Section offsetTopSize="small" offsetBottomSize="small" theme='green'>
      <S.Container>
        <S.Title size="large">
          {`We are recommended by`} <TextTexture width={158} height={16} IconComponent={TextureSVG}>98%</TextTexture> {`of experts, C-levels\nand companies we have worked with`}
        </S.Title>

        <S.Description size="medium">
          {`Most clients have been working with A-BOTS for at least 1.5 years,\nand some for more than 5 years`}
        </S.Description>

        {/* <S.Footer>
          <S.Icon src='/images/clutch.png'/>

          <S.Rating />
        </S.Footer> */}
      </S.Container>
    </Section>
  )
}
