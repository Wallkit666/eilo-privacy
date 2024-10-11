import React from 'react'

import { Icon } from "@components"

import * as S from './project-list-item.styled'

export default function ProjectListItemView({ data, active, className, onClick }) {
  return (
    <S.Container className={className} active={active} onClick={onClick}>
      <S.Content>
        <S.Title>{data.title}</S.Title>

        {/* <S.Tag>
          <S.TagValue>{data.button}</S.TagValue>
        </S.Tag> */}

        {/* <S.Button theme='green-light' title={data.button}/> */}
      </S.Content>

      <Icon name="arrow-right" size={24} />

      <S.Inducator active={active} />
    </S.Container>
  )
}
