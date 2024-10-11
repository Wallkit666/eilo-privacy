import React from "react";

import * as S from "./text-texture.styled";

const TextTextureView = ({
  children,
  width,
  height,
  offsetSize,
  IconComponent,
}) => {
  return (
    <S.Container>
      <S.Text>{children}</S.Text>

      <S.Icon
        as={IconComponent}
        width={width}
        height={height}
        offsetSize={offsetSize}
      />
    </S.Container>
  );
};

export default TextTextureView;
