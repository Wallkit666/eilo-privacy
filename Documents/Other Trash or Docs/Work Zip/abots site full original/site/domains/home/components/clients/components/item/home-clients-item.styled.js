import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${responsiveSize(72)};

  background: #FFFFFF url(${props => props.url}) no-repeat center center;
  background-size: contain;
  border-radius: ${responsiveSize(8)};

  filter: grayscale(100%);
  
  :hover {
    filter: grayscale(0%);
  }

  @media (max-width: 767.98px) {
    height: ${responsiveSize(64)};
  }
`