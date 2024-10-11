import React from 'react';

import * as S from "./home-questions-info-item.styled"

const HomeQuestionsInfoItemView = ({ className, title, bold, icon }) => {
  return (
    <S.Container className={className}>
      <S.Icon icon={icon} size={24} />

      <S.Title bold={bold}>{title}</S.Title>
    </S.Container>
  );
}

export default HomeQuestionsInfoItemView;
