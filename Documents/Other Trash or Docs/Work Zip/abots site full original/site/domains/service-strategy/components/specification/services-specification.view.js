import React from 'react'

import { Section } from '@components'
import { SectionTitle } from "@components/section"

import ServiceStrategyCard from './components/card'

import * as S from './services-specification.styled'

import ArrowLeftSVG from "./images/arrow-left"
import ArrowRightSVG from "./images/arrow-right"

export default function ServicesSpecificationView() {
  return (
    <Section
      theme='white'
      TitleComponent={<SectionTitle>Why do you need to build a strategy and create a technological specification?</SectionTitle>}
    >
      <S.Container>
        <S.Content>
          <S.Card>
            <S.TextureLeft />

            <ServiceStrategyCard title="Depending on the size of software projects, the development stages may differ, in some cases they will be very detailed and complex stages, and in others they will simply be formulated in any form convenient for developers" />
          </S.Card>

          <S.Card>
            <ServiceStrategyCard title="If the project is large and very important, which will possibly affect people's lives or is associated with huge financial risks, all stages of software development will be followed, i.e. detailed and even new stages, micro-stages and so on will be added" />

            <S.TextureRight />
          </S.Card>
        </S.Content>

        <S.Arrows>
          <S.Arrow as={ArrowLeftSVG} />

          <S.Arrow as={ArrowRightSVG} />
        </S.Arrows>

        <S.Description>All this is done in order to prevent errors and implement the product that is really needed</S.Description>
      </S.Container>
    </Section>
  )
}
