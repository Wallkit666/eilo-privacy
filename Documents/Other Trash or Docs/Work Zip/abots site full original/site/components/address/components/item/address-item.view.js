import React from "react";

import * as S from "./address-item.styled";

const AddressItemView = ({ className, title, link, bold, icon, target }) => {
  return (
    <S.Container className={className} href={link} target={target}>
      <S.Icon icon={icon} size={24} />

      <S.Title bold={bold}>{title}</S.Title>
    </S.Container>
  );
};

export default AddressItemView;
