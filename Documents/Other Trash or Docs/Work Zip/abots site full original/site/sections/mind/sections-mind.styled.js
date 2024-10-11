import styled from "styled-components";

import { Section as SectionCustom } from "@components";
import { Button as ButtonCustom } from "@components";

import { SectionTitle } from "@components/section";

import PreviewLeftSVG from "./images/preview-left";
import PreviewRightSVG from "./images/preview-right";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: ${responsiveSize(12)};

  @media (max-width: 767.98px) {
    padding-bottom: ${responsiveSize(69)};
  }
`;

export const Section = styled(SectionCustom)`
  position: relative;

  @media (max-width: 767.98px) {
    padding-top: 0px;
  }
`;

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(48)};
`;

export const Button = styled(ButtonCustom)`
  width: ${responsiveSize(196)};
`;

export const PreviewLeft = styled(PreviewLeftSVG)`
  position: absolute;
  bottom: ${responsiveSize(38)};
  left: 0px;

  width: 15vw;
  height: 16vw;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(116)};
    height: ${responsiveSize(123)};
    bottom: 0px;
  }
`;

export const PreviewRight = styled(PreviewRightSVG)`
  position: absolute;
  bottom: 0px;
  right: 0px;

  width: 20vw;
  height: 13vw;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(151)};
    height: ${responsiveSize(98)};
    bottom: 0px;
  }
`;
