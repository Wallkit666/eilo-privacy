import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  color: #16252d;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`;

export const Star = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  color: #00d563;
`;
