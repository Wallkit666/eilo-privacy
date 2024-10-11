import React from "react";

import { TextTexture, Button } from "@components";

import SectionBenefits from "@sections/benefits";

import * as S from "./service-mobile-applications.styled";

import TextureSVG from "./images/texture";

export default function ServiceMobileApplicationsView({ data, onOpenModal }) {
  return (
    <SectionBenefits
      theme="transparent"
      numberPerLine={4}
      items={data}
      CardFooterComponent={
        <Button title="Discuss it" onClick={() => onOpenModal("contacts")} />
      }
      TitleComponent={
        <S.Title>
          What{" "}
          <TextTexture width={359} height={16} IconComponent={TextureSVG}>
            applications
          </TextTexture>{" "}
          does the team create A-BOTS
        </S.Title>
      }
    />
  );
}
