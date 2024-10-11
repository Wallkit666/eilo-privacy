import React from "react";

import { TextTexture } from "@components";
import { SectionTitle } from "@components/section";

import TextureSVG from "./images/texture";

import * as S from "./home-superpower.styled";

export default function HomeSuperpowerView({ data, onGoToService }) {
  return (
    <S.Section
      TitleComponent={
        <SectionTitle size="large">
          Our{" "}
          <TextTexture width={358} height={16} IconComponent={TextureSVG}>
            superpower
          </TextTexture>{" "}
          is our technology stack
        </SectionTitle>
      }
      offsetHorizontalSize="large"
    >
      <S.Container>
        {data?.map((item) => (
          <S.Card data={item} key={item?.id} onGoToService={onGoToService} />
        ))}
      </S.Container>
    </S.Section>
  );
}
