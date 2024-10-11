import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

import TextureLeftSVG from "./images/texture-left"
import TextureRightSVG from "./images/texture-right"

export const Title = styled.h2`
  position: relative;
  font-size: ${responsiveSize(48)};
  line-height: ${responsiveSize(62)};
  color: #16252D;
  text-align: center;
  white-space: pre-wrap;

  font-family: 'Candal';

  ${props => props.theme === 'dark' && `color: #FFFFFF;`}

  ${props => props.theme === 'green' && `
    color: #FFFFFF;
  `}

  @media (max-width: 1199.98px) {
    max-width: ${responsiveSize(1000)};
  }

  @media (min-width: 992px){
    ${props => props.size === "large" && `
      font-size: ${responsiveSize(52)};
      line-height: ${responsiveSize(67)};
    `}
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: ${responsiveSize(38)};
    line-height: ${responsiveSize(42)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(28)};
    line-height: ${responsiveSize(36)};
  }
`

export const TextureLeft = styled(TextureLeftSVG)`
  position: absolute;
  top: 100%;
  right: 100%;
  transform: translateY(-55%) translateX(5%);
  width: ${responsiveSize(44)};
  height: ${responsiveSize(59)};

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const TextureRight = styled(TextureRightSVG)`
  position: absolute;
  bottom: 100%;
  left: 100%;
  transform: translateY(60%) translateX(-15%);
  width: ${responsiveSize(57)};
  height: ${responsiveSize(51)};

  @media (max-width: 767.98px) {
    display: none;
  }
`