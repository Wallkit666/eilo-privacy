import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.span`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;

  @media (min-width: 992px) {
    left: 50%;
    bottom: -15%;

    width: ${(props) => responsiveSize(props.width)};
    height: ${(props) => responsiveSize(props.height)};

    transform: translateX(-50%);

    ${(props) =>
      props.offsetSize === "big" &&
      `
       bottom: -40%;
    `}
  }

  @media (max-width: 991.98px) {
    left: 0px;
    bottom: -35%;
    right: 0px;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    bottom: -20%;
  }
`;

export const Text = styled.span`
  position: relative;
  z-index: 1;
`;
