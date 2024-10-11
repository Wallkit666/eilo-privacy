import React from 'react'

import * as S from './project-platform.styled'

export default function ProjectPlatformView({ className, data, items }) {
  return (
    <S.Container className={className}>
      <S.Title>{data?.title}</S.Title>

      <S.Description>{data?.description}</S.Description>

      <S.Content>
        {items.map((item, index) => (
          <S.Item data={item} key={index} />
        ))}
      </S.Content>
    </S.Container>
  )
}
