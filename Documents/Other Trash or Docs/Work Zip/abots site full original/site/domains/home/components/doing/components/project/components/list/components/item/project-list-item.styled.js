import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(24)};
  position: relative;

  display: flex;
  align-items: center;

  background: #FFFFFF;

  border: 1px solid #EAEBEC;
  border-radius: ${responsiveSize(8)};

  transition: all 0.4s;
  cursor: pointer;

  :hover {
    transform: scale(0.95);
  }

  ${props => props.active && `
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    // border-color: #00D563;
  `}
`

export const Content = styled.div`
  flex: 1;
  margin-right: ${responsiveSize(4)};

  display: flex;
  flex-direction: column;
`

export const Title = styled.h5`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;

  color: #16252D;
`

export const Inducator = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 3px;

  background-color: #00D563;

  border-radius: 0px 0px ${responsiveSize(8)} ${responsiveSize(8)};

  opacity: ${props => props.active ? 1 : 0};

  transition: all 0.4s;
`