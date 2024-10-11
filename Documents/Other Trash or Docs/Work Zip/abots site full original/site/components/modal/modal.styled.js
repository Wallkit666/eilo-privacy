import styled from "styled-components";

import IconCustom from "@components/icon";

import ReactModal from "react-modal";

import { responsiveSize } from "@utils/responsive";

export const Modal = styled(ReactModal).attrs((props) => ({
  style: {
    overlay: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      outline: "none",
      zIndex: 2,
      // padding: `0px ${responsiveSize(20)}`
    },
    content: {
      outline: "none",
      maxWidth: props.full ? "100%" : responsiveSize(1348),
      width: "100%",
    },
    container: {
      zIndex: 2,
      width: "100vw",
    },
  },
}))`
  z-index: 10;
`;

export const Container = styled.div`
  margin: ${responsiveSize(40)} ${responsiveSize(120)};

  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin-left: ${responsiveSize(100)};
    margin-right: ${responsiveSize(100)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-left: ${responsiveSize(60)};
    margin-right: ${responsiveSize(60)};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-left: ${responsiveSize(40)};
    margin-right: ${responsiveSize(40)};
  }

  @media (max-width: 575.98px) {
    margin: ${responsiveSize(20)};
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  width: 100%;

  background: #ffffff;
  border-radius: ${responsiveSize(24)};
`;

export const Children = styled.div`
  position: relative;
  /* padding-bottom: ${responsiveSize(16)}; */

  ${(props) => `overflow-y: ${props.overflow}`};

  /* overflow-y: auto; */
`;

export const Close = styled.div`
  position: absolute;
  top: ${responsiveSize(16)};
  right: ${responsiveSize(16)};
  padding: ${responsiveSize(8)};

  background: #fff;
  border-radius: ${responsiveSize(8)};

  cursor: pointer;
  transition: all 0.4s;

  z-index: 2;

  :hover {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;

export const Icon = styled(IconCustom)`
  width: ${responsiveSize(32)};
  height: ${responsiveSize(32)};

  @media (max-width: 767.98px) {
    width: ${responsiveSize(24)};
    height: ${responsiveSize(24)};
  }
`;
