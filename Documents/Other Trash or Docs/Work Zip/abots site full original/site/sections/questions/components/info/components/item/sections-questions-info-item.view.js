import React from "react";

import * as S from "./sections-questions-info-item.styled";

const SectionsQuestionsInfoItemView = ({
  className,
  title,
  link,
  bold,
  icon,
  target,
}) => {
  return (
    <S.Container className={className} href={link} target={target}>
      <S.Icon icon={icon} size={24} />

      <S.Title bold={bold}>{title}</S.Title>
    </S.Container>
  );
};

export default SectionsQuestionsInfoItemView;
