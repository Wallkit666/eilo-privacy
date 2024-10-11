import styled from 'styled-components';

import { Button } from "@components"

import LayoutsRootHeaderItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: ${responsiveSize(24)} 0px;

  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  background-color: transparent;
  transition: all 0.4s;

  z-index: 3;

  ${props => props.painted && `
    background-color: #fff;

    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  `}

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(16)} 0px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: ${responsiveSize(90)};
  height: ${responsiveSize(60)};

  cursor: pointer;
  user-select: none;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${responsiveSize(75)};
    height: ${responsiveSize(40)};
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(40)};
    height: ${responsiveSize(24)};
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Item = styled(LayoutsRootHeaderItem)`
  :not(:last-child) {
    margin-right: ${responsiveSize(32)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    :not(:last-child) {
      margin-right: ${responsiveSize(24)};
    }
  }
`

export const Action = styled(Button)`
  margin-left: ${responsiveSize(32)};

  @media (max-width: 991.98px) {
    display: none;
  }
`

export const Progress = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: ${responsiveSize(4)};
  width: ${props => props.value}%;

  background-color: #00D563;
`

export const Trigger = styled.div`
  display: none;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 767.98px) {
    display: flex;
  }
`