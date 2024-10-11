import React from "react";

import ServiceMobileAdvantsgesItemArguments from "./components/argument";

import * as S from "./service-mobile-advantages-item.styled";

import { API } from "@configs/api";

export default function ServiceMobileApproachesItemView({
  className,
  position,
  data,
  onOpenModal,
}) {
  return (
    <S.Container className={className} position={position}>
      <S.Preview image={`${API}${data?.preview?.data?.attributes?.url}`} />

      <S.Content position={position}>
        <S.Subtitle onClick={() => onOpenModal("contacts")}>
          {data?.subtitle}
        </S.Subtitle>

        <S.Title>{data?.title}</S.Title>

        <S.Description>{data?.description}</S.Description>

        <S.List>
          <S.Group>
            {data?.advantages?.map((item) => (
              <S.Argument type="plus" data={item} key={item?.id} />
            ))}
          </S.Group>

          <S.Hr />

          <S.Group>
            {data?.disadvantages?.map((item) => (
              <S.Argument type="minus" data={item} key={item?.id} />
            ))}
          </S.Group>
        </S.List>
      </S.Content>
    </S.Container>
  );
}
