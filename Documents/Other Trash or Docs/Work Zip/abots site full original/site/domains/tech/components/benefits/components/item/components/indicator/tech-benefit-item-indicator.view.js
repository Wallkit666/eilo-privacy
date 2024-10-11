import React from 'react';

import * as S from "./tech-benefit-item-indicator.styled"

const TechBenefitItemIndicatorView = ({ className, position, last }) => {
  return (
    <S.Container className={className} position={position}>
      <S.Point>
        <S.Cirle />

        <S.Cirle />

        <S.Cirle />

        <S.Cirle />

        <S.Doth />
      </S.Point>

      {!last && <S.Line />}
    </S.Container>
  );
}

export default TechBenefitItemIndicatorView;
