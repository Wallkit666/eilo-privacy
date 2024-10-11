import React from 'react'

import * as S from './home-slider-social.styled'

const items = [
  {
    icon: "/images/social/linkedin-round.png",
    link: "https://www.linkedin.com/company/a-bots/"
  },
  {
    icon: "/images/social/twitter-round.png",
    link: "https://twitter.com/AlphaBots_IT"
  },
  {
    icon: "/images/social/youtube-round.png",
    link: "https://youtube.com/@alphabots3139"
  }
]

export default function HomeSliderItemSocialView({ className }) {
  return (
    <S.Container className={className}>
      {items?.map((item, index) => (
        <S.Item url={item?.icon} href={item?.link} target="_blank" key={index} />
      ))}
    </S.Container>
  )
}
