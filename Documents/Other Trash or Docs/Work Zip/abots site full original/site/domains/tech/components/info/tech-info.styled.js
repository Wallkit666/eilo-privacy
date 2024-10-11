import styled from 'styled-components';

import { Section as CustomSection } from '@components'

import { SectionTitle, SectionDescription } from "@components/section"

import { responsiveSize } from "@utils/responsive";

export const Section = styled(CustomSection)`
  width: 100vw;
`

export const Container = styled.div`
  padding: ${responsiveSize(265)} 0px ${responsiveSize(276)};
  /* padding-bottom: ${responsiveSize(11)}; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 991.98px) {
    padding: ${responsiveSize(234)} 0px;
  }
`

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(50)};

  /* font-family: 'Candal';
  font-size: ${responsiveSize(52)};
  line-height: ${responsiveSize(67)};
  text-align: center; */

  /* color: #16252D; */

  @media (max-width: 991.98px) {
    margin-bottom: ${responsiveSize(40)};
  }
`

export const Description = styled(SectionDescription)`
  /* font-size: ${responsiveSize(18)};
  line-height: 150%;
  text-align: center; */

  max-width: ${responsiveSize(830)};

  /* color: #6C757D; */

  :last-child{
    margin-top: ${responsiveSize(20)};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-width: ${responsiveSize(670)};
  }

  @media (max-width: 991.98px) {
    max-width: 100%;
  }
`

export const Info = styled.div`
  
`

export const Label = styled.p`
  position: absolute;

  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  color: #00D563;

  @media (min-width: 992px) {
    :nth-child(1){
      top: ${responsiveSize(116)};
      left: ${responsiveSize(369)};
    }

    :nth-child(2){
      top: ${responsiveSize(284)};
      left: ${responsiveSize(-18)};
    }

    :nth-child(3){
      bottom: ${responsiveSize(200)};
      left: ${responsiveSize(136)};
    }

    :nth-child(4){
      bottom: ${responsiveSize(104)};
      right: ${responsiveSize(252)};
    }

    :nth-child(5){
      bottom: ${responsiveSize(335)};
      right: ${responsiveSize(5)};
    }

    :nth-child(6){
      top: ${responsiveSize(175)};
      right: ${responsiveSize(110)};
    }
  }

  @media (max-width: 991.98px) {
    :nth-child(1) {
      top: ${responsiveSize(73)};
      right: ${responsiveSize(9)};
    }

    :nth-child(2) {
      top: ${responsiveSize(136)};
      left: ${responsiveSize(0)};
    }

    :nth-child(3) {
      bottom: ${responsiveSize(136)};
      left: ${responsiveSize(0)};
    }

    :nth-child(4) {
      display: none;
    }

    :nth-child(6) {
      display: none;
    }

    :nth-child(5) {
      bottom: ${responsiveSize(73)};
      right: ${responsiveSize(9)};
    }
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Point = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Cirle = styled.div`
  position: absolute;
  border-radius: 50%;

  opacity: 0.4;
  transform: translateY(5%);

  :nth-child(1) {
    width: ${responsiveSize(1046)};
    height: ${responsiveSize(1046)};

    border: 1px solid #61E268;
  }

  :nth-child(2) {
    width: ${responsiveSize(1303)};
    height: ${responsiveSize(1303)};


    border: 0.8px solid #61E268;
  }

  :nth-child(3) {
    width: ${responsiveSize(1561)};
    height: ${responsiveSize(1561)};

    border: 0.6px solid #61E268;
  }

  :nth-child(4) {
    width: ${responsiveSize(1818)};
    height: ${responsiveSize(1818)};

    border: 0.4px solid #61E268;
  }

  @media (max-width: 767.98px) {
    :nth-child(1) {
      width: ${responsiveSize(566)};
      height: ${responsiveSize(566)};
    }

    :nth-child(2) {
      width: ${responsiveSize(706)};
      height: ${responsiveSize(706)};
    }

    :nth-child(3) {
      width: ${responsiveSize(846)};
      height: ${responsiveSize(846)};
    }

    :nth-child(4) {
      width: ${responsiveSize(985)};
      height: ${responsiveSize(985)};
    }
  }
`