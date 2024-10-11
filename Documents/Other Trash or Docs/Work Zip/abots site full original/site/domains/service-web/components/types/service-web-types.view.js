import React from "react";

import { TextTexture, Button } from "@components";

import SectionBenefits from "@sections/benefits";

import TextureSVG from "./images/texture";

import * as S from "./service-web-types.styled";

export default function ServiceWebTypesView({ data, onOpenModal }) {
  return (
    <SectionBenefits
      items={data}
      CardFooterComponent={
        <Button title="Discuss it" onClick={() => onOpenModal("contacts")} />
      }
      TitleComponent={
        <S.Title>
          What{" "}
          <TextTexture width={155} height={11} IconComponent={TextureSVG}>
            types
          </TextTexture>{" "}
          of software are included in Web development
        </S.Title>
      }
    />
  );
}
