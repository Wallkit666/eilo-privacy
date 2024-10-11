import React from 'react';

import * as S from "./home-slider-arrow.styled"

const HomeSliderArrowView = ({ className, type, title }) => {
  return (
    <S.Container className={className} type={type}>
      <S.Icon name="arrow-left" size={32} type={type} />

      {!!title && (
        <S.Content type={type}>
          <S.Description>See case</S.Description>

          <S.Title>{title}</S.Title>
        </S.Content>
      )}
    </S.Container>
  );
}

export default HomeSliderArrowView;
