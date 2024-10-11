import React from 'react'

import { Section, TextTexture } from '@components'

import TextureSVG from "./images/texture"

import * as S from './services-stack.styled'

export default function ServicesStackView({ data }) {
  return (
    <Section theme='dark' offsetBottomSize="small" offsetTopSize="small">
      <S.Container>
        <S.Info>
          <S.Title theme="dark">Tech <TextTexture width={155} height={11} IconComponent={TextureSVG}>stack</TextTexture></S.Title>
        </S.Info>

        <S.Content>
          {data?.map((item, index) => (
            <S.Item data={item} position={index % 2 !== 0 ? 'right' : 'left'} key={item?.id} />
          ))}
        </S.Content>
      </S.Container>
    </Section>
  )
}
