import React from 'react'

import { Section } from '@components'

import PortfolioGalleryFinished from './components/finished'

import * as S from './portfolio-gallery.styled'

export default function PortfolioGalleryView() {
  return (
    <Section theme='dark' title='Gallery'>
      <S.Container>
        <PortfolioGalleryFinished/>
      </S.Container>
    </Section>
  )
}
