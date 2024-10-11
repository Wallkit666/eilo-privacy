import React from "react";

import BlogHeader from "./components/header";
import SectionTopStories from "@sections/top-stories";
import BlogStrenghts from "./components/strengths";

import * as S from "./blog.styled";

const BlogView = ({ blogPage }) => {
  return (
    <S.Container>
      <BlogHeader data={blogPage?.mainStory?.data} />

      <SectionTopStories data={blogPage?.topStories} />

      <BlogStrenghts data={blogPage?.stories} />
    </S.Container>
  );
};

export default BlogView;
