import React from 'react'

import { Section } from '@components'

import * as S from './about-header.styled'

export default function AboutHeaderView() {
  return (
    <S.Container>
      <Section theme='white' isPaddingVertical={false}>
        <S.Content>
          <S.Title size="large">{`A-BOTS\nDigital happiness delivery`}</S.Title>

          <S.Description>Ukrainian full cycle development team for mobile & web apps and chat bots. Our main experience is based on the creation of Mobile app(native / cross), SaaS, CRMs, LMSs, ERPs, admin panels, dashboards, chat bots.</S.Description>

          <S.Video>
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/v9cwtG_Qhfk">
            </iframe>
          </S.Video>
        </S.Content>
      </Section>

      <S.Preview>
        <S.Left />

        <S.Right />
      </S.Preview>
    </S.Container>
  )
}
