import React from "react";

import { SplideTrack } from "@splidejs/react-splide";

import * as S from "./slider.styled";

import { responsiveSize } from "@utils/responsive";

import ArrowLeftSVG from "./images/arrow-left";
import ArrowRightSVG from "./images/arrow-right";

function SliderView({ data, renderItem, options, isArrows }) {
  return (
    <S.Splide
      isArrows={isArrows}
      hasTrack={false}
      options={{
        type: "loop",
        gap: responsiveSize(24),
        autoWidth: true,
        focus: "center",
        padding: responsiveSize(120),
        breakpoints: {
          1199.98: {
            padding: responsiveSize(80),
          },
          991.98: {
            padding: responsiveSize(60),
          },
          767.98: {
            padding: responsiveSize(20),
          },
        },
        ...options,
      }}
    >
      <SplideTrack>{data?.map(renderItem)}</SplideTrack>

      {isArrows && (
        <S.Arrows className="splide__arrows">
          <S.Arrow
            type="prev"
            className="splide__arrow--prev"
            icon={ArrowLeftSVG}
            size={32}
          />

          <S.Arrow
            type="next"
            className="splide__arrow--next"
            icon={ArrowRightSVG}
            size={32}
          />
        </S.Arrows>
      )}
    </S.Splide>
  );
}

SliderView.defaultProps = {
  options: {},
  isArrows: true,
};

export default SliderView;
