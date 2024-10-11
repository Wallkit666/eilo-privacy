import React from "react";

import { Modal } from "@components";

import HomeDoingProjectPlatform from "./components/platform";

import * as S from "./project.styled";

export default function ProjectView({
  isOpen,
  data,
  activeProgectId,
  activeProgect,
  onChangeActiveProgectId,
}) {
  return (
    <Modal
      full
      isOpen={isOpen}
      overflow="auto"
      TitleComponent={<S.Title>data?.name</S.Title>}
    >
      <S.Container>
        <S.Title>{data?.name}</S.Title>

        <S.List
          data={data}
          value={activeProgectId}
          onSelect={onChangeActiveProgectId}
        />

        <S.Info>
          <HomeDoingProjectPlatform data={activeProgect} />
        </S.Info>

        <S.Body>
          {data?.progects?.map((item) => (
            <S.Collapse
              title={item?.title}
              active={activeProgectId}
              key={item?.id}
              onChangeActive={() => onChangeActiveProgectId(item?.id)}
            >
              <HomeDoingProjectPlatform data={item} />
            </S.Collapse>
          ))}
        </S.Body>
      </S.Container>
    </Modal>
  );
}
