import React from 'react'

import { Icon } from "@components"

import * as S from './layouts-root-footer-item.styled'

export default function LayoutsRootFooterItemView({ data, className, onSelect }) {
  return (
    <S.Container className={className}>
      <S.Header>
        <S.Title type={data?.type}>{data?.title}</S.Title>
      </S.Header>

      <S.Content type={data?.type}>
        {data?.items.map((item, index) => (
          <S.Item key={index} onClick={() => onSelect(item?.route, item?.target)}>
            {!!item?.icon && (
              <S.Icon url={item?.icon} />
            )}

            <S.Label type={data?.type}>{item?.label}</S.Label>
          </S.Item>
        ))}
      </S.Content>
    </S.Container>
  )
}
