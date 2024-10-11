import React from "react";

import * as S from "./home-slider.styled";

// import HomeSliderBusiness from "./components/business"

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function HomeSliderView({
  data,
  items,
  arrowMeta,
  onMoved,
  onOpenModal,
}) {
  return (
    <S.Container>
      <Splide
        hasTrack={false}
        options={{
          pagination: false,
          width: "100%",
          type: "loop",
        }}
        onMove={onMoved}
      >
        <SplideTrack>
          {items?.map((item) => (
            <SplideSlide key={item?.id}>
              <S.Item data={item} onEstimate={() => onOpenModal("contacts")} />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <div className="splide__arrow--prev">
            <S.Arrow title={arrowMeta?.prev} type="left" />
          </div>

          <div className="splide__arrow--next">
            <S.Arrow title={arrowMeta?.next} type="right" />
          </div>
        </div>
      </Splide>

      {/* {JSON.stringify(items[0])} */}

      <S.Social />
    </S.Container>
  );
}
