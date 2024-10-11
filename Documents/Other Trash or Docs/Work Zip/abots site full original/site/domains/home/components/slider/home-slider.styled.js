import styled from 'styled-components';

import HomeSliderItem from './components/item'
import HomeSliderArrow from "./components/arrow"
import HomeSliderSocial from './components/social'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;

  background-color: #F5F5F6;

  /* .splide__arrow {
    

    &--prev {
      opacity: 0.5;
    }
  } */
`

export const Item = styled(HomeSliderItem)`
`

export const Arrow = styled(HomeSliderArrow)`
  position: absolute;
  
  user-select: none;

  ${props => props.type === "left" &&  `left: ${responsiveSize(65)};`}
  ${props => props.type === "right" &&  `right: ${responsiveSize(42)};`}

  @media (min-width: 1199px) {
    top: 50%;

    /* transition: translate(-50%); */
  }

  @media (min-width: 576px) and (max-width: 1199.98px) {
    bottom: ${responsiveSize(48)};

    ${props => props.type === "left" &&  `left: ${responsiveSize(60)};`}
    ${props => props.type === "right" &&  `right: ${responsiveSize(60)};`}
  }

  @media (max-width: 575.98px) {
    bottom: ${responsiveSize(24)};

    ${props => props.type === "left" &&  `left: ${responsiveSize(20)};`}
    ${props => props.type === "right" &&  `right: ${responsiveSize(20)};`}
  }
`

export const Social = styled(HomeSliderSocial)`
  position: absolute;
  bottom: ${responsiveSize(37)};
  left: ${responsiveSize(120)};

  @media (max-width: 1199.98px) {
    display: none;
  }
`