import React from "react";

import { TextTexture } from "@components";

import * as S from "./layouts-root-header-item.styled";

import Link from "next/link";

import TextureSVG from "./images/texture";

export default function LayoutsRootHeaderItemView({
  className,
  title,
  active,
  href = "",
  onClick,
}) {
  return (
    <Link href={href}>
      <S.Container className={className} onClick={onClick}>
        <S.Title>
          <TextTexture
            width={74}
            height={4}
            offsetSize="big"
            IconComponent={active && TextureSVG}
          >
            {title}
          </TextTexture>
        </S.Title>
      </S.Container>
    </Link>
  );
}
