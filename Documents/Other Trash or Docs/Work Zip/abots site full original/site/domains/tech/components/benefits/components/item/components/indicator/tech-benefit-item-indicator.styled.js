import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  flex: 1;
  max-width: ${responsiveSize(16)};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767.98px) {
    max-width: ${responsiveSize(60)};
  }
`

export const Point = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Doth = styled.div`
  width: ${responsiveSize(16)};
  height: ${responsiveSize(16)};

  border-radius: 50%;

  background-color: #00D563;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(8)};
    height: ${responsiveSize(8)};
  }
`

export const Line = styled.div`
  width: 0px;
  height: 100%;

  border-right: 1px dashed #00D563;
`

export const Cirle = styled.div`
  position: absolute;
  border-radius: 50%;

  :nth-child(1) {
    width: ${responsiveSize(42)};
    height: ${responsiveSize(42)};

    border: 1px solid #00D563;

    @media (max-width: 767.98px) {
      width: ${responsiveSize(22)};
      height: ${responsiveSize(22)};
    }
  }

  :nth-child(2) {
    width: ${responsiveSize(68)};
    height: ${responsiveSize(68)};

    opacity: 0.6;

    border: 0.8px solid #00D563;

    @media (max-width: 767.98px) {
      width: ${responsiveSize(36)};
      height: ${responsiveSize(36)};
    }
  }

  :nth-child(3) {
    width: ${responsiveSize(88)};
    height: ${responsiveSize(88)};

    opacity: 0.4;

    border: 0.6px solid #00D563;

    @media (max-width: 767.98px) {
      width: ${responsiveSize(46)};
      height: ${responsiveSize(46)};
    }
  }

  :nth-child(4) {
    width: ${responsiveSize(114)};
    height: ${responsiveSize(114)};

    opacity: 0.2;

    border: 0.4px solid #00D563;

    @media (max-width: 767.98px) {
      width: ${responsiveSize(60)};
      height: ${responsiveSize(60)};
    }
  }
`