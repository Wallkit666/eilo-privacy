import React from 'react'

import Link from "next/link"

import * as S from './technologies.styled'

export default function TechnologiesView({ className, items }) {
  return (
    <S.Container className={className}>
      <S.Title>Technologies used:</S.Title>

      <S.Content>
        {items?.map((item) => (
          <Link href={`/tech/${item?.attributes?.key}`} key={item?.id}>
            <S.Item>
              {item?.attributes?.icon}

              <S.Title>{item?.attributes?.title}</S.Title>
            </S.Item>
          </Link>
        ))}
      </S.Content>
    </S.Container>
  )
}
