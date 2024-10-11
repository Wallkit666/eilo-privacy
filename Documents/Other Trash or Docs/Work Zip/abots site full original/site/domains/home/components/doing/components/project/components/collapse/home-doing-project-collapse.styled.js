import styled from 'styled-components';

import { Icon } from "@components"
import OverflowCustom from "@components/overflow"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div` 
  padding: 0px ${responsiveSize(16)};

  border: 1px solid #EAEBEC;
  border-radius: ${responsiveSize(8)}; 
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${responsiveSize(16)} 0px;
  position: relative;

  cursor: pointer;
  transition: all 0.1s;

  :hover {
    opacity: 0.5;
  }

  z-index: 1;
`

export const Title = styled.h5`
  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: 150%
`

export const Content = styled.div`
  padding: ${responsiveSize(16)} 0px;

  border-top: 1px solid #EAEBEC;
`

// export const TitleContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   margin-bottom: 5px;
// `

// export const Title = styled.h5`
//   margin-left: 12px;

//   font-size: 17px;
//   font-weight: 600;
//   line-height: 21px;
// `

export const Indicator = styled.div`
  width: 2px;
  height: 15px;
  position: absolute;
  left: -1px;

  background-color: #79A0EA;
  border-radius: 4px;

  ${props => props.theme === "yellow" && `
    background-color: #D4EA79;
  `}

  ${props => props.theme === "red" && `
    background-color: #EA8A79;
  `}
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: #707B86;
`

export const Arrow = styled(Icon)`
  transition: all 0.4s;

  ${props => props.active && `
    transform: rotate(90deg);
  `}
`

export const Overflow = styled(OverflowCustom)`
  /* padding: 33px 30px 0px; */
`