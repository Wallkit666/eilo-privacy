import React from 'react'

import { Section, TextTexture, Slider } from '@components'
import { SectionTitle } from '@components/section'

import { SplideSlide } from '@splidejs/react-splide';

import * as S from './sections-strengths.styled'

import TextureSVG from "./images/texture"

export default function SectionsStrengthsView({ data }) {
  const renderItem = (item) => (
    <SplideSlide key={item?.id}>
      <S.Card data={item} />
    </SplideSlide>
  )

  return (
    <Section
      isTexture
      offsetTopSize="small"
      theme='dark'
      TitleComponent={<SectionTitle isTexture theme="dark" size="large">Our <TextTexture width={279} heiht={14} IconComponent={TextureSVG}>strengths</TextTexture> according to clients</SectionTitle>}
      ContentComponent={(
        <Slider
          data={data}
          renderItem={renderItem}
        />
      )}
    />
  )
}
