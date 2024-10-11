import React from "react";

import PinSVG from "./images/pin";
import MailSVG from "./images/mail";
import PhoneSVG from "./images/phone";
import PlainSVG from "./images/plane";

import * as S from "./sections-questions-info.styled";

export default function SectionsQuestionsInfoView({ data, className }) {
  return (
    <S.Container className={className}>
      <S.Item bold title={data?.title} icon={PinSVG} />

      <S.Item
        title={data?.data?.email?.title}
        link={data?.data?.email?.link}
        icon={MailSVG}
      />

      <S.Item
        title={data?.data?.phone?.title}
        link={data?.data?.phone?.link}
        icon={PhoneSVG}
      />

      <S.Item
        title={data?.data?.telegram?.title}
        link={data?.data?.telegram?.link}
        icon={PlainSVG}
        target="_blank"
      />
    </S.Container>
  );
}
