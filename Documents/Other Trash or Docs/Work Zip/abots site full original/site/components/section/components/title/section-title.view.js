import React from 'react';

import * as S from "./section-title.styled"

const SectionTitleView = ({ className, children, theme, isTexture, size }) => {
  return (
    <S.Title className={className} theme={theme} size={size}>
      {children}

      {isTexture && <>
        <S.TextureLeft />

        <S.TextureRight />
      </>}
    </S.Title>
  );
}

SectionTitleView.defaultProps = {
  size: "base"
}

export default SectionTitleView;
