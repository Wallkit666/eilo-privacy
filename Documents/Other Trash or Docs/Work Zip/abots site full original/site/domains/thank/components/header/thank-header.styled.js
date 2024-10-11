import styled from 'styled-components';

import { SectionTitle, SectionDescription } from "@components/section"

import LeftIcon from './images/left'
import RightIcon from './images/right'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding-top: ${responsiveSize(108)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (min-width: 768px) {
    min-height: 100vh;
  }

  @media (orientation: portrait) and (min-width: 768px) {
    min-height: 70vh;
  }

  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(56)};
  }

  @media (max-width: 375px) {
    min-height: 100vh;
  }
`

export const Content = styled.div`
  max-width: ${responsiveSize(910)};
  
  @media (min-width: 768px) {
    margin-top: 10.5vw;
  }

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(40)};
  }

  @media (orientation: landscape) and (max-width: 991.98px) {
    margin-top: 0vw;
  }
`

export const Title = styled(SectionTitle)`
  /* font-family: 'Candal';

  font-size: ${responsiveSize(52)};
  line-height: ${responsiveSize(67)};
  text-align: center;

  color: #16252D; */
`
export const Description = styled(SectionDescription)`
  margin-top: ${responsiveSize(40)};

  @media (max-width: 767px) {
    margin-top: ${responsiveSize(24)};
  }
  

  // font-size: 18px;
  // line-height: 150%;

  // text-align: center;

  // color: #16252D;
`

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media (min-width: 991px) {
    position: absolute;
    bottom: 0px;
  }

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(62)};
  }
`

export const Left = styled(LeftIcon)`
  /* position: absolute;
  bottom: 0px;
  left: 0px; */

  
  height: auto;
  max-width: ${responsiveSize(451)};

  @media (min-width: 992px) {
    width: 19vw;
  }

  @media (max-width: 767.98px) {
    max-width: ${responsiveSize(134)};
  }
`

export const Right = styled(RightIcon)`
  /* position: absolute;
  bottom: 0px;
  right: 0px; */

  
  height: auto;
  max-width: ${responsiveSize(329)};

  @media (min-width: 992px) {
    width: 17.1vw;
  }

  @media (max-width: 767.98px) {
    max-width: ${responsiveSize(98)};
  }
`