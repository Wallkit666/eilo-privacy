import React from 'react'

import HomeQuestionFormFast from './components/form-fast'
import HomeQuestionFormProductive from './components/form-productive'

import { Section } from '@components'

import { SectionTitle } from '@components/section'

import * as S from './home-questions.styled'

const items = [
  {
    title: 'Zurich, Switzerland',
    data: {
      email: 'info@a-bots.com',
      phone: "+41 79 435 85 16",
      telegram: "@Alphabots_support"
    }
  },
  {
    title: 'Kyiv, Ukraine',
    data: {
      email: 'info@a-bots.com',
      phone: "+380 95 147 77 70",
      telegram: "@Alphabots_support"
    }
  },
]

const options = [
  { label: "Fast", value: "fast" },
  { label: "Productive", value: "productive" },
]

export default function HomeQuestionsView({ type, onChangeType }) {
  return (
    <Section offsetHorizontalSize="large" offsetBottomSize="extra-small">
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Questions>
              <SectionTitle>Have questions</SectionTitle>

              <S.Icon />
            </S.Questions>

            <S.Switch value={type} options={options} onChange={onChangeType} />
          </S.Header>

          {type === "fast" ? <HomeQuestionFormFast /> : <HomeQuestionFormProductive />}
        </S.Content>

        <S.Info>
          {items.map((item, index) => (
            <S.InfoItem data={item} key={index} />
          ))}
        </S.Info>
      </S.Container>
    </Section>
  )
}
