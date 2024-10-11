import React from "react";

import { Section } from "@components";

import * as S from "./benefits.styled";

function BenefitsView({
  items,
  title,
  theme,
  numberPerLine,
  TitleComponent,
  CardFooterComponent,
}) {
  return (
    <Section
      theme="white"
      title={title}
      offsetBottomSize="extra-small"
      isPaddingHorizontalMobile={false}
      TitleComponent={TitleComponent}
    >
      <S.Container>
        {items?.map((item, index) => (
          <S.Card
            theme={theme}
            numberPerLine={numberPerLine}
            data={item}
            key={index}
            FooterComponent={CardFooterComponent}
          />
        ))}
      </S.Container>
    </Section>
  );
}

BenefitsView.defaultProps = {
  numberPerLine: 3,
};

export default BenefitsView;
