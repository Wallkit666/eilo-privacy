import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`

export const Label = styled.span`
  margin-left: ${responsiveSize(8)};

  font-size: ${responsiveSize(18)};
  font-weight: 500;
  line-height: 160%;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

export const Left = styled.div`
  margin-left: ${responsiveSize(8)};
`