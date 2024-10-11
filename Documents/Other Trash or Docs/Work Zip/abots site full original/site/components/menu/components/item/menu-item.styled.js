import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;

  text-align: center;

  color: #16252d;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
    white-space: nowrap
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${responsiveSize(16)};

  background-color: #D9FAEC;

  border: 1px solid #00D563;
  border-radius: ${responsiveSize(6)};

  cursor: pointer;

  transition: all 0.3s;

  :hover{
    background-color: #00D563;

    ${Title} {
      color: #FFFFFF;
    }
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(12)} ${responsiveSize(8)};
  }
`
