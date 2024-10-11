import React from "react";

import { TextTexture, Button } from "@components";

import { SectionTitle } from "@components/section";

import SectionBenefits from "@sections/benefits";

import TextureSVG from "./images/texture";

// import * as S from './service-mobile-applications.styled'

export default function ServiceMobileApplicationsView({ data, onOpenModal }) {
  return (
    <SectionBenefits
      theme="green-light"
      numberPerLine={4}
      items={data}
      TitleComponent={
        <SectionTitle>
          What are the types of{" "}
          <TextTexture width={243} height={16} IconComponent={TextureSVG}>
            chatbots
          </TextTexture>
          ?
        </SectionTitle>
      }
      CardFooterComponent={
        <Button title="Discuss it" onClick={() => onOpenModal("contacts")} />
      }
    />
  );
}
