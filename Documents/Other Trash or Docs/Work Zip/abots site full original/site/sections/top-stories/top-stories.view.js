import React from "react";

import { Section, TextTexture, Slider } from "@components";

import { SectionTitle } from "@components/section";

import { SplideSlide } from "@splidejs/react-splide";

import TextureSVG from "./images/texture";

import * as S from "./top-stories.styled";

import { responsiveSize } from "@utils/responsive";

export default function TopStoriesView({ data, ...props }) {
  const renderItem = (item) => (
    <SplideSlide key={item?.post?.data?.key}>
      <S.Card data={item?.post?.data} />
    </SplideSlide>
  );

  return (
    <Section
      {...props}
      // isPaddingHorizontal={false}
      // isHorizontalScroll
      TitleComponent={
        <SectionTitle>
          <TextTexture IconComponent={TextureSVG} width={105} height={14}>
            Top
          </TextTexture>{" "}
          stories
        </SectionTitle>
      }
      ContentComponent={
        <Slider
          data={data}
          isArrows={false}
          renderItem={renderItem}
          options={{
            type: "",
            gap: responsiveSize(32),
            focus: "left",
          }}
        />
      }
    />
  );
}
