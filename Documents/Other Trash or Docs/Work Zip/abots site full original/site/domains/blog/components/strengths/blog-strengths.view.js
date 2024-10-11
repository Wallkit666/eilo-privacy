import React from "react";

import { Section } from "@components";
import { SectionTitle } from "@components/section";

import * as S from "./blog-strengths.styled";

export default function BlogStrengthsView({ data }) {
  return (
    <Section
      theme="white"
      TitleComponent={
        <SectionTitle>Our strengths according to clients</SectionTitle>
      }
    >
      <S.Container>
        <S.Wrapper>
          {data?.large?.map((item) => (
            <S.Card key={item?.id} data={item?.post?.data} />
          ))}
        </S.Wrapper>

        <S.Content>
          {data?.other?.map((item) => (
            <S.Card key={item?.id} data={item?.post?.data} />
          ))}

          {!!data?.list?.length && (
            <S.List>
              {data?.list?.map((item) => (
                <S.Card
                  type="horizontal"
                  data={item?.post?.data}
                  key={item?.id}
                />
              ))}
            </S.List>
          )}
        </S.Content>
      </S.Container>
    </Section>
  );
}
