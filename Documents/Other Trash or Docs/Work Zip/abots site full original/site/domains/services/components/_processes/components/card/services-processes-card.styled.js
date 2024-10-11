import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(32)};

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

  @media (max-width: 1199.98px) {
    padding: ${responsiveSize(24)};
  }
`

export const Number = styled.p`
  margin-bottom: ${responsiveSize(40)};

  font-family: 'Candal';
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(83)};

  color: #00D563;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};

    font-size: ${responsiveSize(48)};
    line-height: ${responsiveSize(62)};
  }
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(24)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #16252D;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(16)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Description = styled.p`
  font-weight: 400;
  font-size: ${responsiveSize(18)};
  line-height: 150%;
  color: #6C757D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`