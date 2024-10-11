import React from 'react';

import Icon from "@components/icon"

import * as S from "./rating.styled"

import StarSVG from "./images/star"

const RatingView = ({ className }) => {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Value>4.8</S.Value>

        <S.Label>/ 5.0</S.Label>

        <S.Inner>
          <Icon icon={StarSVG} size={24} />
          <Icon icon={StarSVG} size={24} />
          <Icon icon={StarSVG} size={24} />
          <Icon icon={StarSVG} size={24} />
        </S.Inner>
      </S.Content>

      <S.Description>Based on 134 clients reviews</S.Description>
    </S.Container>
  );
}

export default RatingView;
