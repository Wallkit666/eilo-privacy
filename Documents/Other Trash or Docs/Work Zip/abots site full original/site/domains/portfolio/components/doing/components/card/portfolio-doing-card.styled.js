import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(72)};
`

export const Title = styled.p`
  font-family: 'Candal';
  font-weight: 400;
  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(83)};

  color: #00D563;
`
export const Unit = styled.span`
  font-weight: 800;
  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(78)};
  color: #00D563;
  font-family: 'Montserrat';

`

export const Description = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(32)};

  color: #6C757D;
`