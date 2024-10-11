import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(38)};

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(24)};
  }
`

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;

  color: #6C757D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`