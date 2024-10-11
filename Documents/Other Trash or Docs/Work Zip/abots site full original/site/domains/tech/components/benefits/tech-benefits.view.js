import React from 'react'

import { Section, TextTexture } from '@components'
import { SectionTitle } from '@components/section'

import TextureSVG from "./images/texture"

import * as S from './tech-benefits.styled'

export default function TechBenefitsView({ className, data, name }) {
  return (
    <Section
      className={className}
      theme="white"
      TitleComponent={<SectionTitle>Benefits of <TextTexture width={243} heiht={16} IconComponent={TextureSVG}>{name}</TextTexture></SectionTitle>}
      offsetBottomSize="extra-small"
    >
      <S.Container>
        {data?.map(group => (
          <S.Group key={group?.id}>
            <S.Title>{group?.title}</S.Title>

            {group?.items.map((item, index) => (
              <S.Item data={item} position={index % 2 !== 0 ? 'right' : 'left'} last={index === group?.items?.length - 1} key={item?.id} />
            ))}
          </S.Group>
        ))}
      </S.Container>
    </Section>
  )
}
