import React from "react";

import * as S from "./form-item.styled";

export default function FormItemView({ className, required, children, title }) {
  return (
    <S.Container className={className}>
      <S.Label>
        {title} {required && <S.Star>*</S.Star>}
      </S.Label>

      {children}
    </S.Container>
  );
}
