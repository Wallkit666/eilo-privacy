import React from 'react'

import { Section, Icon } from '@components';

import * as S from './layouts-root-header.styled'

import Link from "next/link"

export default function LayoutsRootHeaderView({ router, items, scrollPosition, pathname, onOpenModal, onOpenSidebar }) {
  return (
    <S.Container painted={scrollPosition > 1} id="top-line">
      <Section theme="transparent" isPaddingVertical={false}>
        {/* {JSON.stringify(router)} */}

        <S.Content>
          <Link href="/">
            <S.Logo src='/images/logo-black.svg' />
          </Link>

          <S.Menu>
            {items?.map((item, index) => (
              <S.Item title={item?.title} href={item?.href} active={pathname === item?.pathname} key={index} />
            ))}
          </S.Menu>

          <S.Action title='Estimate project' onClick={() => onOpenModal("contacts")} />

          <S.Trigger onClick={onOpenSidebar}>
            <Icon name="menu" size={24} />
          </S.Trigger>
        </S.Content>
      </Section>

      <S.Progress value={scrollPosition} />
    </S.Container>
  )
}
