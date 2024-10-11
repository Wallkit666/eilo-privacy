import React from 'react'

import * as S from "./form-checkbox-item-inner.styled"

export default function FormCheckboxItemInnerView({active, ...props}) {
  return (
    <S.Container active={active} {...props}>
      <S.Icon name="ckeck" active={active} size={24} />
    </S.Container>
  )
}
