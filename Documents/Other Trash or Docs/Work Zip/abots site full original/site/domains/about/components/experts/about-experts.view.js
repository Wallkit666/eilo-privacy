import React from 'react'

import { Section, TextTexture, Slider } from '@components'
import { SectionTitle } from '@components/section'

import { SplideSlide } from '@splidejs/react-splide';

import * as S from './about-experts.styled'

import TextureSVG from "./images/texture"

// const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]

export default function AboutExpertsView({ data }) {
  const renderItem = (item) => (
    <SplideSlide key={item?.id}>
      <S.Card data={item.attributes} />
    </SplideSlide>
  )

  return (
    <Section
      theme='dark'
      offsetTopSize="small"
      TitleComponent={<SectionTitle theme="dark">Our crew of <TextTexture width={226} height={17} IconComponent={TextureSVG}>experts</TextTexture></SectionTitle>}
      ContentComponent={(
        <Slider
          data={data}
          renderItem={renderItem}
          options={{
            type: "",
            focus: "left"
          }}
        />
      )}
    />
  )
}
