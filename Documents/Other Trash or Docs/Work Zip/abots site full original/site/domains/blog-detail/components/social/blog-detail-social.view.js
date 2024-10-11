import React from "react";

import { Tags } from "@components";

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

import FacebookSVG from "./images/facebook";
import TwitterSVG from "./images/twitter";
import TelegramSVG from "./images/telegram";

import * as S from "./blog-detail-social.styled";

const href = typeof window !== "undefined" ? window?.location?.href : "";

export default function BlogDetailSocialView({ className, tags }) {
  return (
    <S.Container className={className}>
      <Tags items={tags} />

      <S.Social>
        <S.Icon as={FacebookShareButton} url={href}>
          <S.IconButton>
            <FacebookSVG />
          </S.IconButton>
        </S.Icon>

        <S.Icon as={TwitterShareButton} url={href}>
          <S.IconButton>
            <TwitterSVG />
          </S.IconButton>
        </S.Icon>

        <S.Icon as={TelegramShareButton} url={href}>
          <S.IconButton>
            <TelegramSVG />
          </S.IconButton>
        </S.Icon>
      </S.Social>
    </S.Container>
  );
}
