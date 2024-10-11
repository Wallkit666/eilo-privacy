import React from 'react'

import { TextTexture } from '@components'

import SectionBenefits from '@sections/benefits'

import * as S from './service-chatbot-bots.styled'

import TextureSVG from "./images/texture"

export default function ServiceChatbotBotsView({ data }) {
  return (
    <SectionBenefits
      theme="green"
      numberPerLine={4}
      items={data}
      TitleComponent={<S.Title>What <TextTexture width={242} height={16} IconComponent={TextureSVG}>chatbots</TextTexture> does the team create A-BOTS</S.Title>}
    />
  )
}
