import React from 'react'

import * as S from './project-list.styled'

export default function ProjectListView({ className, data, value, onSelect }) {
  return (
    <S.Container className={className}>
      <S.Title>{data?.name}</S.Title>

      <S.Content>
        {data?.progects?.map((item) => (
          <S.Item data={item} active={value === item?.id} key={item?.id} onClick={() => onSelect(item?.id)} />
        ))}
      </S.Content>
    </S.Container>
  )
}
