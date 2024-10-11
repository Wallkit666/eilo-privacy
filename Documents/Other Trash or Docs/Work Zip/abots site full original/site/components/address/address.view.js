import React from "react";

import AddressItem from "./components/item";

import * as S from "./address.styled";

import PinSVG from "./images/pin";
import MailSVG from "./images/mail";
import PhoneSVG from "./images/phone";
import PlainSVG from "./images/plane";

export default function AddressView({ title, data, className }) {
  return (
    <S.Container className={className}>
      <AddressItem bold title={title} icon={PinSVG} />

      <AddressItem
        title={data?.email?.title}
        link={data?.email?.link}
        icon={MailSVG}
      />

      <AddressItem
        title={data?.phone?.title}
        link={data?.phone?.link}
        icon={PhoneSVG}
      />

      <AddressItem
        title={data?.telegram?.title}
        link={data?.telegram?.link}
        target="_blank"
        icon={PlainSVG}
      />
    </S.Container>
  );
}
