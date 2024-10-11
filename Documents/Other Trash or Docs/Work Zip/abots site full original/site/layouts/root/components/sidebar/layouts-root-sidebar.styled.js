import styled from "styled-components";

import { Address as AddressCustom } from "@components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 100%;
  max-width: ${responsiveSize(332)};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${responsiveSize(32)};

  background-color: #fff;

  transform: ${(props) => (props.show ? "translateX(-100%)" : "translateX(0)")};
  transition: all 0.4s;

  z-index: 9;
  overflow-y: auto;
`;

export const Close = styled.div`
  margin: ${responsiveSize(16)} ${responsiveSize(20)} ${responsiveSize(16)} auto;

  transition: all 0.4s;

  :hover {
    opacity: 0.6;
  }
`;

export const Overflow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  width: 100vw;

  opacity: ${(props) => (props.show ? 1 : 0)};
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.4s, width 0s;

  ${(props) =>
    !props.show &&
    `
    width: 0vw;
    transition-delay: 0ms, 400ms;
  `}
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  margin: ${responsiveSize(16)} 0px;
  flex-shrink: 0;

  background-color: #f5f5f6;
`;

export const Address = styled(AddressCustom)`
  margin: 0px ${responsiveSize(25)};

  :not(:last-child) {
    margin-bottom: ${responsiveSize(24)};
  }
`;
