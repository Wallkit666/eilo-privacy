import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Description = styled.p`
  text-align: center;
  font-size: ${responsiveSize(18)};
  line-height: 150%;
  color: #6C757D;

  ${props => props.theme === 'green' && `
    color: #FFFFFF;
    max-width: 700px;
    text-align: center;
  `}

  @media (min-width: 992px){
    ${props => props.size === "medium" && `
      font-size: ${responsiveSize(24)};
    `}

    ${props => props.size === "large" && `
      font-size: ${responsiveSize(28)};
      line-height: ${responsiveSize(34)};
    `}
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: ${responsiveSize(17)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(16)};
  }
`