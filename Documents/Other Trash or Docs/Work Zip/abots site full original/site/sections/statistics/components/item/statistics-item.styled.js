import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  @media (min-width: 768px) {
    padding: ${responsiveSize(32)};
  }
`

export const Title = styled.h4`
  margin-bottom: ${responsiveSize(40)};

  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(83)};
  color: #00D563;
  font-family: 'Candal';

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(18)};

    font-size: ${responsiveSize(48)};
    line-height: ${responsiveSize(62)};
  }
`

export const Percent = styled.span`
  font-weight: 800;
  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(78)};
  color: #00D563;
  font-family: 'Montserrat';

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(48)};
    line-height: ${responsiveSize(59)};
  }
`

export const Description = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(32)};
  color: #FFFFFF;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(32)};
  }
`