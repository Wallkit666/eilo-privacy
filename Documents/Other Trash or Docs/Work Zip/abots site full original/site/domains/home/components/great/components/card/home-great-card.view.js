import React from "react";

import { Icon, Button } from "@components";

import ArrowSVG from "./images/arrow";

import * as S from "./home-great-card.styled";

import Link from "next/link";

import { API } from "@configs/api";

export default function HomeGreatCardView({ className, data, onOpenModal }) {
  return (
    <S.Container className={className}>
      <S.Icon
        image={`${API}${data?.attributes?.icon?.data?.attributes?.url}`}
      />

      <S.Title>{data?.attributes?.title}</S.Title>

      <S.Description>{data?.attributes?.description}</S.Description>

      <S.Footer>
        <Link href={`/services/${data?.attributes?.key}`}>
          <S.More>
            <S.MoreTitle>Learn more</S.MoreTitle>

            <S.Arrow>
              <Icon icon={ArrowSVG} size={18} />
            </S.Arrow>
          </S.More>
        </Link>

        <Button title="Discuss it" onClick={() => onOpenModal("contacts")} />
      </S.Footer>
    </S.Container>
  );
}
