import React from "react";

import * as S from "./layouts-root-copyright.styled";

import Moment from "react-moment";

const LayoutsRootCopyrightView = () => {
  return (
    <S.Section theme="dark" isPaddingVertical={false}>
      <S.Container>
        <S.Value>
          Copyright © <Moment format="YYYY" /> Alpha Systems LTD All rights
          reserved.
          <br />
          Made with ❤️ by A-BOTS
        </S.Value>
      </S.Container>
    </S.Section>
  );
};

export default LayoutsRootCopyrightView;
