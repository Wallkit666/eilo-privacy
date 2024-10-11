import React from 'react'

import { TextTexture } from "@components"

import Link from 'next/link'

import * as S from './sidebar-item.styled'

import TextureSVG from "./images/texture"

export default function SidebarItemView({ data, active, onSelect }) {
  return (
    <Link href={data?.href} passHref>
      <S.Container active={active} onClick={onSelect}>
        <TextTexture width={74} height={4} IconComponent={active && TextureSVG}>
          <S.Title>
            {data?.title}
          </S.Title>
        </TextTexture>
      </S.Container>
    </Link>
  )
}
