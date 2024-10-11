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
  justify-content: center;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled(SectionTitle)`
 
`

export const Description = styled(SectionDescription)`
  margin: ${responsiveSize(40)} 0px;

  @media (max-width: 767px) {
    margin: ${responsiveSize(24)} 0px;
  }
`

export const Video = styled.div`
  position: relative;
  width: ${responsiveSize(620)};
  height: ${responsiveSize(350)};

  background-color: #000;

  z-index: 2;

  @media (max-width: 767.98px) {
    max-width: 100%;
    width: ${responsiveSize(310)};
    height: ${responsiveSize(174)};
  }
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