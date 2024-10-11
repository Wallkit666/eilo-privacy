import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Preview = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${responsiveSize(200)};
  height: ${responsiveSize(200)};
  margin-bottom: ${responsiveSize(32)};

  border: 1px solid transparent;
  border-radius: ${responsiveSize(16)};

  transition: all 0.4s;

  transform: translateX(-50%);
`

export const Icon = styled.div`
  width: 100%;
  height: 100%;

  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;

  transition: all 0.4s;
`

export const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: ${responsiveSize(217)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${responsiveSize(58)};

  transition: all 0.4s;
  transform: translateX(-50%);
`

export const Title = styled.h6`
  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  color: #FFFFFF;
  text-align: center;
  width: 100%;

  transition: all 0.4s;
`

export const Description = styled.p`
  margin-top: ${responsiveSize(112)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #FFFFFF;

  opacity: 0;

  transition: all 0.4s;
`

export const Container = styled.div`
  display: flex;
  min-height: ${responsiveSize(369)};
  padding: ${responsiveSize(54)};

  border: 1px solid rgba(217, 250, 236, 0.1);
  border-radius: ${responsiveSize(24)};

  transition: all 0.4s;
  cursor: pointer;

  :hover {
    background: #00D563;
    border-color: #61E268;

    ${Preview} {
      top: 0px;
      left: 0px;
      width: ${responsiveSize(80)};
      height: ${responsiveSize(80)};
      background: #fff;
      border-radius: ${responsiveSize(16)};
      border-color: #F5F5F6;

      transform: translateX(0%);
    }

    ${TitleContainer} {
      top: ${responsiveSize(11)};
      left: ${responsiveSize(112)};

      transform: translateX(0%);
    }

    ${Title} {
      width: 0%;
    }

    ${Description} {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`

export const Content = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`