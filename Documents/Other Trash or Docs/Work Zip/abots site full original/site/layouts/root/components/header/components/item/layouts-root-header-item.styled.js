import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(7)} ${responsiveSize(10)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`

export const Title = styled.h6`
  position: relative;
  padding: ${responsiveSize(3)} 0px;
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};

  color: #16252D;
`