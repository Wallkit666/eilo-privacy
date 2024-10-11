import React from 'react'

import * as S from './sections-partners.styled'

import { Section, TextTexture } from '@components'
import { SectionTitle } from '@components/section'

import TextureSVG from "./images/texture"

function SectionsPartnersView({ className, size, items, name }) {
  return (
    <Section
      className={className}
      TitleComponent={<SectionTitle>Examples of companies that <TextTexture width={94} height={14} IconComponent={TextureSVG}>use</TextTexture> {name}</SectionTitle>}
      offsetBottomSize="extra-small"
    >
      <S.Container>
        {/* {JSON.stringify(items)} */}
        {items?.map(item => (
          <S.Item size={size} data={item} key={item?.id} />
        ))}
      </S.Container>
    </Section>
  )
}

SectionsPartnersView.defaultProps = {
  size: "base"
}

export default SectionsPartnersView;