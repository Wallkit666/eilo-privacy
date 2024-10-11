import React from 'react';

import * as S from "./switch.styled"

const SwitchView = ({className, value, options, activeIndex, onChange}) => {
  return (
    <S.Container className={className}>
      {options?.map(item => (
        <S.Item key={item?.value} onClick={() => onChange(item?.value)}>
          <S.Label active={item?.value === value}>{item?.label}</S.Label>
        </S.Item>
      ))}

      {activeIndex >= 0 && <S.Indicator value={activeIndex} />}
    </S.Container>
  );
}

export default SwitchView;
