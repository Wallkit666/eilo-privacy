import React from 'react'

import * as S from './home-clients.styled'

import { Section, TextTexture } from '@components'
import { SectionTitle } from '@components/section'

import TextureSVG from "./images/texture"

const items = [
  "/images/home/clients/1.png",
  "/images/home/clients/2.png",
  "/images/home/clients/3.png",
  "/images/home/clients/4.png",
  "/images/home/clients/5.png",
  "/images/home/clients/6.png",
  "/images/home/clients/7.png",
  "/images/home/clients/8.png",
  // "/images/home/clients/bitbucket.png",
  // "/images/home/clients/fathom.png",
  // "/images/home/clients/bubble.png",
  // "/images/home/clients/livechat.png",
  // "/images/home/clients/typeform.png",
]

export default function HomeClientsView() {
  return (
    <Section
      TitleComponent={<SectionTitle>Our incredible <TextTexture width={181} height={14} IconComponent={TextureSVG}>clients</TextTexture></SectionTitle>} offsetBottomSize="extra-small"
    >
      <S.Container>
        {items.map((item, index) => (
          <S.Item data={item} key={index} />
        ))}
      </S.Container>
    </Section>
  )
}
