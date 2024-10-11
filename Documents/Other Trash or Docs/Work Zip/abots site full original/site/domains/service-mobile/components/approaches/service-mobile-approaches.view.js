import React from "react";

import { Section } from "@components";

import * as S from "./service-mobile-approaches.styled";

export default function ServiceMobileApproachesView({ data, onOpenModal }) {
  return (
    <Section
      isPaddingHorizontalMobile={false}
      offsetBottomSize="small"
      theme="white"
      TitleComponent={
        <S.Title>
          Advantages and disadvantages of approaches to mobile application
          development
        </S.Title>
      }
    >
      <S.Container>
        {data?.map((item, index) => (
          <S.Item
            data={item}
            position={index % 2 !== 0 ? "right" : "left"}
            onOpenModal={onOpenModal}
            key={item?.id}
          />
        ))}
      </S.Container>
    </Section>
  );
}
