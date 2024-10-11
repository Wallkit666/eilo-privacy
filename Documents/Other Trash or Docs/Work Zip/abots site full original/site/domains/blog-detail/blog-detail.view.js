import React from "react";

import SectionTopStories from "@sections/top-stories";

import { Section } from "@components";

import ReactMarkdown from "react-markdown";

import * as S from "./blog-detail.styled";

export default function BlogDetailView({ markdown, topStories, post }) {
  return (
    <div>
      <Section offsetHorizontalSize="big">
        <S.Social tags={post?.attributes?.tags} />

        <S.Content>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </S.Content>
      </Section>

      {!!topStories?.length && (
        <SectionTopStories theme="white" data={topStories} />
      )}
    </div>
  );
}
