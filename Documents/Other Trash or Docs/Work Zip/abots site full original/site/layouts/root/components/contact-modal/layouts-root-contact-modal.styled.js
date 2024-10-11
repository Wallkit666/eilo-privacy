import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(56)};

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(16)};
  }
`

export const Title = styled.h3`
  margin-bottom: ${responsiveSize(48)};

  font-size: ${responsiveSize(52)};
  line-height: ${responsiveSize(67)};

  color: #16252D;

  font-family: 'Candal';

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};

    font-size: ${responsiveSize(28)};
    line-height: ${responsiveSize(36)};
  }
`