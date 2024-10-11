import React from "react";

import * as S from "./sections-mind.styled";

function SectionsMindView({ theme, onOpenModal }) {
  return (
    <S.Section
      theme={theme}
      offsetTopSize="extra-small"
      offsetBottomSize="lagre"
    >
      <S.Container>
        <S.Title>{`Have a project in mind?\nLet’s get to work.`}</S.Title>

        <S.Button
          size="big"
          title="Contact us"
          onClick={() => onOpenModal("contacts")}
        />
      </S.Container>

      <S.PreviewLeft />

      <S.PreviewRight />
    </S.Section>
  );
}

SectionsMindView.defaultProps = {
  theme: "white",
};

export default SectionsMindView;
