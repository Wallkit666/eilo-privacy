import React from 'react'

import { Section } from '@components'

import * as S from './thank-header.styled'

export default function ThankHeaderView() {
  return (
    <S.Container>
      <Section theme='white' isPaddingVertical={false}>
        <S.Content>
          <S.Title size="large">{`A-BOTS\nDigital happiness delivery`}</S.Title>

          <S.Description>Your application has been submitted to the department of work with the best clients - our specialist will contact you shortly!</S.Description>
        </S.Content>
      </Section>

      <S.Preview>
        <S.Left />

        <S.Right />
      </S.Preview>
    </S.Container>
  )
}
