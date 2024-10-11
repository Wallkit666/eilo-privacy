import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${responsiveSize(88)};
  padding: 0px ${responsiveSize(12)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(8)};

  transition: all 0.3s;

  filter: grayscale(100%);
  
  :hover{
    filter: grayscale(0%);
  }

  @media (max-width: 767.98px) {
    height: ${responsiveSize(46)};
  }
`

export const Image = styled.div`
  flex: 1;
  height: ${responsiveSize(40)};
  /* flex: 1; */

  background: url("${props => props.image}") no-repeat center center;
  background-size: contain;

  @media (max-width: 767.98px) {
    height: ${responsiveSize(26)};
  }
`