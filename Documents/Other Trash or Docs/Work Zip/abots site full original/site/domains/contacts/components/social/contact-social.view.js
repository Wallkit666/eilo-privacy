import React from 'react';

import { Section, Icon } from "@components"

import * as S from "./contact-social.styled"

// import FacebookSVG from "./images/facebook"
// import InstagramSVG from "./images/instagram"

const items = [
  {
    id: 1,
    icon: "/images/social/linkedin-white.png",
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/a-bots/",
  },
  {
    id: 2,
    icon: "/images/social/twitter-white.png",
    label: "Twitter",
    link: "https://twitter.com/AlphaBots_IT",
  },
  {
    id: 3,
    icon: "/images/social/youtube-white.png",
    label: "YouTube",
    link: "https://youtube.com/@alphabots3139",
  },
]

const ContactSocialView = () => {
  return (
    <Section theme="green" isPaddingVertical={0}>
      <S.Container>
        {items?.map(item => (
          <S.Item href={item?.link} target="_blank" key={item?.id}>
            <S.Icon url={item?.icon} />

            <S.Label>{item?.label}</S.Label>
          </S.Item>
        ))}
      </S.Container>
    </Section>
  );
}

export default ContactSocialView;
