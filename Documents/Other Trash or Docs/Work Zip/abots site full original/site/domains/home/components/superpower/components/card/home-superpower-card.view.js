import React from "react";

import * as S from "./home-superpower-card.styled";

import Link from "next/link";

import { API } from "@configs/api";

export default function HomeSuperpowerCardView({
  className,
  data,
  onGoToService,
}) {
  return (
    <S.Container className={className}>
      {/* <Link href={`/services/${data?.attributes?.key}`}> */}
      <S.Title
        onClick={() => onGoToService(data?.attributes?.key)}
        isKey={data?.attributes?.key}
      >
        {data?.attributes?.title}
      </S.Title>
      {/* </Link> */}

      <S.Content>
        {data?.attributes?.technologies?.data?.map((item) => (
          <Link href={`/tech/${item?.attributes?.key}`} key={item?.id}>
            <S.Item>
              <S.Icon
                image={`${API}${item?.attributes?.logo?.data?.attributes?.url}`}
              />

              <S.Label>{item?.attributes?.title}</S.Label>
            </S.Item>
          </Link>
        ))}
      </S.Content>
    </S.Container>
  );
}
