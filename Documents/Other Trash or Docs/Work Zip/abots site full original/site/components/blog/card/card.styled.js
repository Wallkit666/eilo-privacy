import styled from "styled-components";

import Image from "next/image";

import { responsiveSize } from "@utils/responsive";

export const Prewiev = styled.div`
  height: ${responsiveSize(220)};
  margin-bottom: ${responsiveSize(24)};

  border-radius: ${responsiveSize(16)};
  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;

  transition: all 0.4s;

  @media (max-width: 575.98px) {
    height: ${responsiveSize(320)};
  }

  ${(props) =>
    props.type === "horizontal" &&
    `
    flex-shrink: 0;
    height: ${responsiveSize(146)};
    width: ${responsiveSize(220)};
    margin-bottom: 0px;
    margin-right: ${responsiveSize(24)};
  `}
`;

export const Container = styled.div`
  padding: ${responsiveSize(24)};

  display: flex;
  flex-direction: column;

  background: #ffffff;

  border: 1px solid #eaebec;
  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.7;

    ${Prewiev} {
      transform: scale(0.95);
    }
  }

  @media (max-width: 768.98px) {
    padding: ${responsiveSize(16)};
  }

  ${(props) =>
    props.type === "horizontal" &&
    `
    flex-direction: row;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Language = styled.p`
  margin-right: auto;
  margin-top: ${responsiveSize(24)};
  margin-bottom: ${responsiveSize(16)};
  padding: ${responsiveSize(8)} ${responsiveSize(16)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};

  color: #00d563;

  background-color: rgba(217, 250, 236, 0.6);
  border-radius: 6px;

  ${(props) =>
    props.type === "horizontal" &&
    `
    margin-top: 0px;
  `}
`;

export const Title = styled.h5`
  margin-bottom: ${responsiveSize(16)};
  margin-top: ${responsiveSize(8)};
  /* margin-top: auto; */

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: ${responsiveSize(36 * 2)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(36)};

  color: #16252d;

  @media (max-width: 768.98px) {
    font-size: ${responsiveSize(24)};
    line-height: ${responsiveSize(36)};
  }
`;

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: ${responsiveSize(24 * 3)};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-weight: 400;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(24)};
  text-overflow: ellipsis;

  color: #343a40;

  @media (max-width: 768.98px) {
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(24)};
  }
`;

export const Date = styled.p`
  margin-top: auto;
  padding-top: 16px;

  font-size: ${responsiveSize(15)};
  line-height: ${responsiveSize(20)};

  opacity: 0.6;
`;
