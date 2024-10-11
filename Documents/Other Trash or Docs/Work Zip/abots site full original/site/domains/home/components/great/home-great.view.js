import React from "react";

import { Section } from "@components";

import HomeGreatHeader from "./components/header";

import * as S from "./home-great.styled";

export default function HomeGreatView({ data, onOpenModal }) {
  return (
    <Section theme="white" offsetTopSize="large">
      <HomeGreatHeader />

      <S.Content>
        {data?.map((item) => (
          <S.Card data={item} onOpenModal={onOpenModal} key={item?.id} />
        ))}
      </S.Content>
    </Section>
  );
}
