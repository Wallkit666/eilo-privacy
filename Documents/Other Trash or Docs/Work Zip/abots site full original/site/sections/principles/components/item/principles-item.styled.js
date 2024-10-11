import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Title = styled.h6`
  margin-bottom: ${responsiveSize(24)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  color: #16252D;
  text-align: center;

  transition: all 0.4s;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Description = styled.p`
  font-size: ${responsiveSize(18)};
  line-height: 150%;
  text-align: center;
  color: #6C757D;

  transition: all 0.4s;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

export const Container = styled.div`
  padding: ${responsiveSize(54)};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFFFFF;

  transition: all 0.4s;

  :hover{
    ${Title}, ${Description}{
      color: #FFFFFF;
    }

    background-color: #00D563;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(30)} ${responsiveSize(24)};
  }
`