import React from "react";

import { Section } from "@components";

import * as S from "./home-slider-item.styled";

import { API } from "@configs/api";

export default function HomeSliderItemView({ data, onEstimate }) {
  return (
    <Section isPaddingVertical={false}>
      <S.Container>
        <S.Content>
          <S.Info>
            {/* {JSON.stringify(data?.attributes?.preview)} */}
            <S.Title size={data?.attributes?.size}>
              {data?.attributes?.title}
            </S.Title>

            <S.Description>{data?.attributes?.description}</S.Description>

            {data?.attributes?.isEstimate && (
              <S.ButtonEstimate
                size="big"
                title="Estimate project"
                onClick={onEstimate}
              />
            )}

            {!!data?.attributes?.technologies?.data?.length && (
              <S.Technologies items={data?.attributes?.technologies?.data} />
            )}
          </S.Info>

          <S.Preview
            image={
              data?.attributes?.preview?.data
                ? `${API}${data?.attributes?.preview?.data?.attributes?.url}`
                : data?.attributes?.preview
            }
          />
        </S.Content>
      </S.Container>
    </Section>
  );
}
