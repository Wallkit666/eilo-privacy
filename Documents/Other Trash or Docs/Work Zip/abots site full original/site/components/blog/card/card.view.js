import React from "react";

import Tags from "@components/tags";

import * as S from "./card.styled";

import Link from "next/link";

import { API } from "@configs/api";

import Moment from "react-moment";

function CardView({ data, size, className, type }) {
  return (
    <Link href={`/blog/${data?.attributes?.key}`}>
      <S.Container className={className} type={type}>
        <S.Prewiev
          className="preview"
          // height={220}
          // width={220}
          size={size}
          type={type}
          url={`${API}${data?.attributes?.preview?.data?.attributes?.url}`}
        />

        <S.Content>
          {!!data?.attributes?.tags?.length && (
            <Tags items={data?.attributes?.tags} />
          )}

          <S.Title>{data?.attributes?.title}</S.Title>

          <S.Description size={size}>
            {data?.attributes?.description}
          </S.Description>

          <S.Date>
            <Moment
              format="DD.MM.YYYY HH:mm"
              date={data?.attributes?.createdAt}
            />
            {/* <ReactMoment>{data?.attributes?.createdAt}</ReactMoment> */}
          </S.Date>
        </S.Content>
      </S.Container>
    </Link>
  );
}

CardView.defaultProps = {
  size: "base",
};

export default CardView;
