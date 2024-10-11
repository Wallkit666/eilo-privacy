import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(64)};
`

export const Title = styled.p`
  font-weight: 400;
  font-size: ${responsiveSize(18)};
  line-height: 150%;

  color: #16252D;
`

export const Content = styled.div`
  margin-top: ${responsiveSize(8)};

  display: flex;

  filter: grayscale(100%);
  opacity: 0.6;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  :not(:last-child){
    margin-right: ${responsiveSize(37)};
  }
`
