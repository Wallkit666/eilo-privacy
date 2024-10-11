import React from "react";

import * as S from "./sections-list-item.styled";

import ReactMarkdown from "react-markdown";

import { API } from "@configs/api";

export default function SectionsListItemView({ className, data }) {
  return (
    <S.Container className={className}>
      <S.Number src={`${API}${data?.number?.data?.attributes?.url}`} />

      <S.Content>
        <S.Title>{data.title}</S.Title>

        <S.Description>
          <ReactMarkdown>{data?.description}</ReactMarkdown>
        </S.Description>
      </S.Content>
    </S.Container>
  );
}
