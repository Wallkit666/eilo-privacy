import React from 'react'

import { Section } from '@components'

import * as S from './sections-list.styled'

export default function SectionsListView({ title, description, data }) {
  return (
    <Section theme='dark' offsetBottomSize="small" offsetTopSize="small">
      <S.Container>
        <S.Info>
          <S.InfoContent>
            <S.Title theme="dark">{title}</S.Title>

            {!!description && <S.Description theme="dark">{description}</S.Description>}
          </S.InfoContent>
        </S.Info>

        <S.Content>
          {data?.map((item, index) => (
            <S.Item data={item} key={item?.id} />
          ))}
        </S.Content>
      </S.Container>
    </Section>
  )
}
