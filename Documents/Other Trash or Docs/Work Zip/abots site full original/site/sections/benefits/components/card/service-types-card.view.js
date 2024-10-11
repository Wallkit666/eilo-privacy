import React from "react";

import * as S from "./service-types-card.styled";

import { API } from "@configs/api";

export default function ServiceTypesCardView({
  className,
  data,
  theme,
  numberPerLine,
  FooterComponent,
}) {
  return (
    <S.Container className={className} numberPerLine={numberPerLine}>
      <S.Preview theme={theme}>
        <S.Icon src={`${API}${data?.icon?.data?.attributes?.url}`} />
      </S.Preview>

      <S.Title>{data?.title}</S.Title>

      <S.Description>{data?.description}</S.Description>

      {!!FooterComponent && <S.Footer>{FooterComponent}</S.Footer>}
    </S.Container>
  );
}
