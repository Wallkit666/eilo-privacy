import React from "react";

import SectionsQuestionFormFast from "./components/form-fast";
import SectionsQuestionFormProductive from "./components/form-productive";

import { Section } from "@components";

import { SectionTitle } from "@components/section";

import * as S from "./sections-questions.styled";

const items = [
  {
    title: "USA",
    data: {
      email: {
        title: "info@a-bots.com",
        link: "mailto:info@a-bots.com",
      },
      phone: {
        title: "17208230734",
        link: "tel:+17208230734",
      },
      telegram: {
        title: "@Alphabots_support",
        link: "https://t.me/Alphabots_support",
      },
    },
  },
  {
    title: "Kyiv, Ukraine",
    data: {
      email: {
        title: "info@a-bots.com",
        link: "mailto:info@a-bots.com",
      },
      phone: {
        title: "+38 063 207 53 72",
        link: "tel:+380632075372",
      },
      telegram: {
        title: "@Alphabots_support",
        link: "https://t.me/Alphabots_support",
      },
    },
  },
];

const options = [
  { label: "Fast", value: "fast" },
  { label: "Productive", value: "productive" },
];

export default function SectionsQuestionsView({ type, onChangeType }) {
  return (
    <Section
      offsetHorizontalSize="large"
      offsetBottomSize="small"
      offsetTopSize="extra-small"
    >
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Questions>
              <SectionTitle size="large">Have questions</SectionTitle>

              <S.Icon />
            </S.Questions>

            <S.Switch value={type} options={options} onChange={onChangeType} />
          </S.Header>

          {type === "fast" ? (
            <SectionsQuestionFormFast />
          ) : (
            <SectionsQuestionFormProductive />
          )}
        </S.Content>

        <S.Info>
          {items.map((item, index) => (
            <S.InfoItem data={item} key={index} />
          ))}
        </S.Info>
      </S.Container>
    </Section>
  );
}
