import React from "react";

import * as S from "./blog-header.styled";

import { API } from "@configs/api";

export default function BlogHeaderView({ data }) {
  return (
    <S.Section offsetTopSize="small" offsetBottomSize="medium">
      {/* isPaddingVertical={false} */}
      {/* offsetTopSize="small" offsetBottomSize="medium" */}
      <S.Container>
        <S.Preview
          url={`${API}${data?.attributes?.preview?.data?.attributes?.url}`}
        />
        {/* {JSON.stringify(data)} */}

        <S.Content>
          <S.Title>{data?.attributes?.title}</S.Title>

          <S.Description>{data?.attributes?.description}</S.Description>

          <S.Button
            title="Read more"
            size="bigger"
            to={`/blog/${data?.attributes?.key}`}
          />
        </S.Content>
      </S.Container>
    </S.Section>
  );
}
