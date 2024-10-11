import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Title = styled.h4`
  margin-bottom: ${responsiveSize(16)};

  font-weight: 600;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  text-transform: uppercase;
  color: #00D563;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(4)};

    font-size: ${responsiveSize(12)};
  }
`

export const Value = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #343A40;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`