import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: ${responsiveSize(4)};
  max-width: ${responsiveSize(328)};
  width: 100%;

  flex-shrink: 0;

  border-radius: ${responsiveSize(100)};
  border: 1px solid #EAEBEC;

  opacity: hidden;
`

export const Item = styled.div`
  position: relative;
  /* width: calc(50% - ${responsiveSize(4)}); */
  flex: 1;
  /* width: ${responsiveSize(160)}; */
  height: ${responsiveSize(50)};
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  cursor: pointer;

  @media (max-width: 767.98px) {
    height: ${responsiveSize(45)};
  }
`

export const Label = styled.span`
  font-weight: 600;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};
  color: ${props => props.active ? "#ffffff" : "#16252D"};

  transition: all 0.4s;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(17)};
  }
`

export const Indicator = styled.div`
  position: absolute;
  left: ${responsiveSize(4)};
  width: calc(50% - ${responsiveSize(4)});
  height: ${responsiveSize(50)};

  border-radius: ${responsiveSize(100)};
  background: #00D563;

  transition: all 0.4s;

  transform: translateX(${props => props.value * 100}%);

  @media (max-width: 767.98px) {
    height: ${responsiveSize(45)};
  }
`