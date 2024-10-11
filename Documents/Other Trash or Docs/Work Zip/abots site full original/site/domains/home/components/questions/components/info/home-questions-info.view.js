import React from 'react'

import PinSVG from './images/pin'
import MailSVG from './images/mail'
import PhoneSVG from './images/phone'
import PlainSVG from './images/plane'

import * as S from './home-questions-info.styled'

export default function HomeQuestionsInfoView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Item bold title={data?.title} icon={PinSVG} />

      <S.Item title={data?.data?.email} icon={MailSVG} />

      <S.Item title={data?.data?.phone} icon={PhoneSVG} />

      <S.Item title={data?.data?.telegram} icon={PlainSVG} />
    </S.Container>
  )
}
