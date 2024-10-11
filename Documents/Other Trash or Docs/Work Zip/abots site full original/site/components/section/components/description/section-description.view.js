import React from 'react';

import * as S from "./section-description.styled"

const SectionDescriptionView = ({ className, theme, size, children }) => {
  return (
    <S.Description className={className} theme={theme} size={size}>
      {children}
    </S.Description>
  );
}

export default SectionDescriptionView;
