import React from 'react'

import * as S from './tech.styled'

import TechHeader from './components/header'
import TechInfo from './components/info'

import SectionStatisctics from '@sections/statistics'
import SectionManagement from '@sections/management'
import SectionPrinciples from '@sections/principles'

const items = [
  "/images/partners/instagram.png",
  "/images/partners/tesla.png",
  "/images/partners/uber.png",
  "/images/partners/discord.png",
  "/images/partners/skype.png",
  "/images/partners/pinterest.png",
  "/images/partners/airbnb.png",
  "/images/partners/walmart.png",
]

export default function TechView({ technology, principles }) {
  return (
    <S.Container>
      <TechHeader data={technology} />

      <div id="info">
        <TechInfo data={technology} />
      </div>

      {!!technology?.partners?.data?.length && (
        <div id="examples">
          <S.Partners size='big' items={technology?.partners?.data} name={technology?.title} />
        </div>
      )}

      <div id="benefits">
        <S.Benefits data={technology?.Benefits} name={technology?.title} />
      </div>

      <div id="management">
        <SectionManagement />
      </div>

      <SectionStatisctics />

      <div id="principles">
        <SectionPrinciples data={principles} />
      </div>
    </S.Container>
  )
}
