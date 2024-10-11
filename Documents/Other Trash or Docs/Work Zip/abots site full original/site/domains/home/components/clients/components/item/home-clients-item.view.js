import React from 'react'

import Bubble from '../../images/bubble'

import * as S from './home-clients-item.styled'

export default function HomeClientsItemView({className, data}) {
  return (
    <S.Container className={className} url={data} />
  )
}
