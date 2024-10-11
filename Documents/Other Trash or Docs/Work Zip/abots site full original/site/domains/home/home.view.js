import React from "react";

import SectionStrengths from "@sections/strengths";

import HomeSlider from "./components/slider";
import HomeClients from "./components/clients";
import HomeGreat from "./components/great";
import HomeDoing from "./components/doing";
import HomeSuperpower from "./components/superpower";
import HomeRecommended from "./components/recommended";

import SectionQuestions from "@sections/questions";
import SectionMind from "@sections/mind";

import * as S from "./home.styled";

export default function HomeView({ home, countries, onOpenModal }) {
  return (
    <S.Container>
      <HomeSlider data={home?.projects?.data} />

      <HomeSuperpower data={home?.stacks?.data} />

      <SectionMind theme="base" />

      <HomeGreat data={home?.services?.data} onOpenModal={onOpenModal} />

      {/* <HomeDoing data={countries} /> */}
      <HomeClients />

      <SectionStrengths data={home?.strengths?.data} />

      <HomeRecommended />

      <SectionQuestions />

      <HomeDoing data={countries} />
    </S.Container>
  );
}
