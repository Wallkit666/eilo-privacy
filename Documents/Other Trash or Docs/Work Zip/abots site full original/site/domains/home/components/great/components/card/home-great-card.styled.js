import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${responsiveSize(56)};
  height: ${responsiveSize(180)};

  background: url("${(props) => props.image}") no-repeat center center;
  background-size: contain;

  transition: all 0.4s;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(16)};

    height: ${responsiveSize(189)};
  }
`;

export const Title = styled.h4`
  margin-bottom: ${responsiveSize(24)};
  min-height: ${responsiveSize(58)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #16252d;

  transition: all 0.4s;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`;

export const Container = styled.div`
  padding: ${responsiveSize(40)};

  display: flex;
  flex-direction: column;

  :hover {
    ${Icon} {
      transform: scale(0.9);
    }

    ${Title} {
      color: #00d563;
    }
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(32)};
  }
`;

export const Description = styled.p`
  margin-bottom: ${responsiveSize(40)};

  font-size: ${responsiveSize(18)};
  line-height: 150%;

  color: #6c757d;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${responsiveSize(16)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`;

export const MoreTitle = styled.span`
  font-weight: 600;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  text-transform: uppercase;

  color: #16252d;
`;

export const Arrow = styled.div`
  margin-left: ${responsiveSize(16)};
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${responsiveSize(24)};
  height: ${responsiveSize(24)};

  border-radius: 50%;

  background: #00d563;
`;
