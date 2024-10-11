import React from 'react'

import * as S from './tech-info.styled'

export default function TechInfoView({ data }) {
  return (
    <S.Section theme='white' isPaddingVertical={false}>
      <S.Container>
        <S.Cirle />

        <S.Cirle />

        <S.Cirle />

        <S.Cirle />

        <S.Title>What is {data?.title}?</S.Title>

        <S.Description>
          {data?.description}
        </S.Description>

        <S.Info>
          {data?.BenefitsTags?.map(item => (
            <S.Label key={item?.id}>{item?.title}</S.Label>
          ))}
        </S.Info>
      </S.Container>
    </S.Section>
  )
}
