import React from "react";

import * as S from "./input.styled";

import { input } from "styled-components";

import InputMask from "react-input-mask";

export default function InputView({
  title,
  className,
  required,
  textarea,
  onChange,
  ...props
}) {
  return (
    <S.Container className={className}>
      <S.Label>
        {title} {required && <S.Star>*</S.Star>}
      </S.Label>

      {textarea ? (
        <S.Textarea
          {...props}
          autocomplete="off"
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <S.Input
          as={props.mask ? InputMask : input}
          {...props}
          autocomplete="off"
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </S.Container>
  );
}
