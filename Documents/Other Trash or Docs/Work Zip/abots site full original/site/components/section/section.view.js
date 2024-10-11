import React from "react";

import SectionTitle from "./components/title";

import * as S from "./section.styled";

function SectionView({
  className,
  children,
  // title,
  description,
  theme,
  // isTexture,
  isPaddingVertical,
  isPaddingHorizontal,
  isPaddingHorizontalMobile,
  isPaddingBottom,
  offsetTopSize,
  offsetBottomSize,
  offsetHorizontalSize,
  ContentComponent,
  TitleComponent,
}) {
  return (
    <S.Container
      className={className}
      isPaddingVertical={isPaddingVertical}
      isPaddingBottom={isPaddingBottom}
      offsetTopSize={offsetTopSize}
      offsetBottomSize={offsetBottomSize}
      theme={theme}
    >
      <S.Content
        isPaddingHorizontal={isPaddingHorizontal}
        isPaddingHorizontalMobile={
          isPaddingHorizontalMobile && isPaddingHorizontal
        }
        offsetHorizontalSize={offsetHorizontalSize}
      >
        {(!!description || !!TitleComponent) && (
          <S.Header isPaddingHorizontalMobile={isPaddingHorizontalMobile}>
            {/* {!!title && <SectionTitle size="large" theme={theme} isTexture={isTexture}>{title}</SectionTitle>} */}

            {TitleComponent}

            {!!description && (
              <S.Description theme={theme}>{description}</S.Description>
            )}
          </S.Header>
        )}

        {children}
      </S.Content>

      {ContentComponent}
    </S.Container>
  );
}

SectionView.defaultProps = {
  isPaddingVertical: true,
  isPaddingHorizontal: true,
  isPaddingHorizontalMobile: true,
  isPaddingBottom: true,
  offsetTopSize: "base",
  offsetBottomSize: "base",
  offsetHorizontalSize: "base",
};

export default SectionView;
