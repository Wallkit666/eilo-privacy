import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.a`
  width: ${responsiveSize(28)};
  height: ${responsiveSize(28)};

  background: url(${props => props.url}) no-repeat center center;
  background-size: contain;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(0.9);
    opacity: 0.5;
  }

  :not(:last-child){
    margin-bottom: ${responsiveSize(16)};
  }
`