import React from "react";

import SectionProcesses from "@sections/processes";
import SectionMind from "@sections/mind";

import ServicesHeader from "./components/header";
import ServicesDirections from "./components/directions";
import ServicesStack from "./components/stack";

import * as S from "./services.styled";

export default function ServicesView({ servicesPage }) {
  return (
    <S.Container>
      <ServicesHeader />

      <div id="directions">
        <ServicesDirections data={servicesPage?.services?.data} />
      </div>

      <div id="stack">
        <ServicesStack data={servicesPage?.technologies.data} />
      </div>

      <div id="processes">
        <SectionProcesses />
      </div>

      <div id="mind">
        <SectionMind />
      </div>
    </S.Container>
  );
}
