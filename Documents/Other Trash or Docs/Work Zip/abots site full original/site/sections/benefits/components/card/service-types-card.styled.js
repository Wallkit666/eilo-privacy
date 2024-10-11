import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(54)} ${responsiveSize(54)} ${responsiveSize(48)};

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: all 0.4s;

  :hover {
    transform: scale(0.9);
  }

  ${(props) =>
    props.numberPerLine === 4 &&
    `
    padding: ${responsiveSize(48)};
  `}

  @media (min-width: 768px) {
    border: 1px solid #eaebec;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
    border-radius: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    border-bottom: 1px solid #eaebec;
  }
`;

export const Preview = styled.div`
  background-color: #343A40;

  width: ${responsiveSize(100)};
  height: ${responsiveSize(100)};

  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 50%;

  ${(props) =>
    props.theme === "green-light" &&
    `
    background-color: #D9FAEC;`}

  ${(props) =>
    props.theme === "green" &&
    `
    background-color: #00D563;`}

${(props) =>
  props.theme === "transparent" &&
  `
    background-color: transparent;`}
`;

export const Icon = styled.img`
  width: ${responsiveSize(60)};
  height: ${responsiveSize(60)};
`;

export const Title = styled.p`
  margin-top: ${responsiveSize(32)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  text-align: center;

  color: #16252d;
`;

export const Description = styled.p`
  flex: 1;
  margin-top: ${responsiveSize(16)};

  max-width: ${responsiveSize(400)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  text-align: center;

  color: #6c757d;
`;

export const Footer = styled.div`
  margin-top: ${responsiveSize(16)};
`;
