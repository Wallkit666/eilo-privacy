import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(54)};

  background-color: #FFFFFF;

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

`

export const Title = styled.p`
  margin-bottom:  ${responsiveSize(32)};

  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};

  color: #16252D;
`

export const Description = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(32)};

  color: #6C757D;
`

