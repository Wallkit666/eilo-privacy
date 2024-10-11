import React from 'react'

// import { TextTexture } from '@components'
import { SectionTitle } from '@components/section'

import SectionBenefits from '@sections/benefits'

import * as S from './service-web-services.styled'

export default function ServiceWebServicesView({ data }) {
  return (
    <SectionBenefits theme="green-light" items={data} TitleComponent={<SectionTitle isTexture>Additional web development services</SectionTitle>} />
  )
}
