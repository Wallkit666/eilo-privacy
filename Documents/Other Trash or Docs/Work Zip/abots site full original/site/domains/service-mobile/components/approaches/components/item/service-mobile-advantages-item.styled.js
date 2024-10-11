import styled from "styled-components";

import ServiceMobileAdvantsgesItemArgument from "./components/argument";

import { responsiveSize } from "@utils/responsive";

export const Preview = styled.div`
  flex: 1;
  max-width: ${responsiveSize(720)};
  min-height: ${responsiveSize(480)};

  border-radius: ${responsiveSize(16)};
  background: #eaebec url(${(props) => props.image}) no-repeat center center;
  background-size: cover;

  transition: 0.4s;

  @media (max-width: 1199.98px) {
    max-width: 100%;
    margin-bottom: ${responsiveSize(54)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    min-height: ${responsiveSize(340)};
  }

  @media (max-width: 767.98px) {
    min-height: ${responsiveSize(218)};
    margin-bottom: ${responsiveSize(24)};
  }
`;

export const Container = styled.div`
  padding: ${responsiveSize(80)} ${responsiveSize(54)};
  display: flex;

  :hover {
    ${Preview} {
      transform: scale(0.95);
    }
  }

  ${(props) => props.position === "right" && `flex-direction: row-reverse;`}

  @media (min-width: 1200px) {
    align-items: center;
  }

  @media (max-width: 1199.98px) {
    flex-direction: column;
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(24)};
  }
`;

export const Content = styled.div`
  flex: 1.1;

  @media (min-width: 1200px) {
    margin-left: ${responsiveSize(54)};

    ${(props) =>
      props.position === "right" &&
      `
      margin-right: ${responsiveSize(54)};
      margin-left: ${responsiveSize(0)}
    `}
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};

  color: #00d563;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`;

export const Description = styled.p`
  margin-top: ${responsiveSize(16)};
  margin-bottom: ${responsiveSize(54)};

  font-size: ${responsiveSize(18)};
  line-height: 150%;
  color: #6c757d;

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(16)};
    margin-bottom: ${responsiveSize(24)};

    font-size: ${responsiveSize(14)};
  }
`;

export const List = styled.div`
  display: flex;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  flex: 1;
`;

export const Hr = styled.div`
  background: #eaebec;

  @media (min-width: 768px) {
    width: 1px;
    margin: 0px ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: 1px;
    margin: ${responsiveSize(16)} 0px;
  }
`;

export const Argument = styled(ServiceMobileAdvantsgesItemArgument)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(16)};
  }
`;
