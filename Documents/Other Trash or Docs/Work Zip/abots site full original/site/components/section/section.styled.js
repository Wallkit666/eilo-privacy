import styled from "styled-components";

import SectionDescription from "./components/description";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${responsiveSize(120)} 0px;

  background: #F5F5F6;

  ${(props) => props.theme === "white" && `background: #FFFFFF;`}
  ${(props) => props.theme === "dark" && `background: #16252D;`}
  ${(props) => props.theme === "green" && `background: #00D563;`}
  ${(props) => props.theme === "transparent" && `background: transparent;`}

  ${(props) =>
    props.offsetTopSize === "extra-small" &&
    `
    padding-top: ${responsiveSize(80)};
  `}

  ${(props) =>
    props.offsetBottomSize === "extra-small" &&
    `
    padding-bottom: ${responsiveSize(80)};
  `}

  ${(props) =>
    props.offsetTopSize === "small" &&
    `
    padding-top: ${responsiveSize(100)};
  `}

  ${(props) =>
    props.offsetBottomSize === "small" &&
    `
    padding-bottom: ${responsiveSize(100)};
  `}

  ${(props) =>
    props.offsetBottomSize === "medium" &&
    `
    padding-bottom: ${responsiveSize(130)};
  `}

  ${(props) =>
    props.offsetTopSize === "large" &&
    `
    padding-top: ${responsiveSize(140)};
  `}

  ${(props) =>
    props.offsetBottomSize === "large" &&
    `
    padding-bottom: ${responsiveSize(140)};
  `}

  ${(props) =>
    !props.isPaddingHorizontal &&
    `
    padding-left: 0px;
    padding-right: 0px;
  `}

  ${(props) =>
    !props.isPaddingVertical &&
    `
    padding-top: 0px;
    padding-bottom: 0px;
  `}

  ${(props) =>
    !props.isPaddingBottom &&
    `
    padding-bottom: 0px;
  `}

  @media (max-width: 767.98px) {
    ${(props) =>
      props.isPaddingVertical &&
      `
      padding-bottom: ${responsiveSize(80)};
      padding-top: ${responsiveSize(80)};
    `}
  }
`;

export const Content = styled.div`
  height: 100%;

  @media (min-width: 1200px) {
    padding: 0px ${responsiveSize(120)};

    ${(props) =>
      props.offsetHorizontalSize === "big" &&
      `
      padding-left: ${responsiveSize(436)};
      padding-right: ${responsiveSize(436)};
    `}

    ${(props) =>
      props.offsetHorizontalSize === "large" &&
      `
      padding-left: ${responsiveSize(262)};
      padding-right: ${responsiveSize(262)};
    `}
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    padding-left: ${responsiveSize(100)};
    padding-right: ${responsiveSize(100)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-left: ${responsiveSize(60)};
    padding-right: ${responsiveSize(60)};
  }

  ${(props) =>
    !props.isPaddingHorizontal &&
    `
    padding-left: 0px;
    padding-right: 0px;
  `}

  ${(props) =>
    props.isPaddingHorizontalMobile &&
    `
    @media (min-width: 576px) and (max-width: 767.98px) {
      padding-left: ${responsiveSize(40)};
      padding-right: ${responsiveSize(40)};
    }

    @media (max-width: 575.98px) {
      padding-left: ${responsiveSize(20)};
      padding-right: ${responsiveSize(20)};
    }
  `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${responsiveSize(64)};

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};
  }

  ${(props) =>
    !props.isPaddingHorizontalMobile &&
    `
    @media (min-width: 576px) and (max-width: 767.98px) {
      padding-left: ${responsiveSize(40)};
      padding-right: ${responsiveSize(40)};
    }

    @media (max-width: 575.98px) {
      padding-left: ${responsiveSize(20)};
      padding-right: ${responsiveSize(20)};
    }
  `}
`;

export const Description = styled(SectionDescription)`
  margin-top: ${responsiveSize(32)};

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(14)};
  }
`;
