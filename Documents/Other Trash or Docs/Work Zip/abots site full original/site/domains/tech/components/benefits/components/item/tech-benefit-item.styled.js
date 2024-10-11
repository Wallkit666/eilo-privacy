import styled from 'styled-components';

import TechBenefitItemIndicator from "./components/indicator"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  position: relative;
  
  flex-direction: row-reverse;

  position: relative;

  @media (min-width: 768px) {
    width: calc(50% + ${responsiveSize(8)});
    margin-left: auto;

    ${props => props.position === 'left' && `
      margin-left: 0px;
      flex-direction: row;
    `}
  }
`

export const Content = styled.div`
  flex: 1;

  @media (min-width: 992px) {
    ${props => !props.last && `
      padding-bottom: ${responsiveSize(103)}; 
    `}

    ${props => props.position === 'left' && `
      padding-right: ${responsiveSize(103)};
    `}

    ${props => props.position === 'right' && `
      padding-left: ${responsiveSize(103)};
    `}
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    ${props => !props.last && `
      padding-bottom: ${responsiveSize(60)}; 
    `}

    ${props => props.position === 'left' && `
      padding-right: ${responsiveSize(60)};
    `}

    ${props => props.position === 'right' && `
      padding-left: ${responsiveSize(60)};
    `}
  }

  @media (max-width: 767.98px) {
    ${props => !props.last && `
      padding-bottom: ${responsiveSize(80)}; 
      padding-left: ${responsiveSize(16)}; 
    `}
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  text-align: left;
  color: #16252D;

  @media (min-width: 768px) {
    ${props => props.position === 'left' && `text-align: right;`}
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Description = styled.p`
  margin-top: ${responsiveSize(16)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  text-align: left;
  color: #6C757D;

  @media (min-width: 768px) {
    ${props => props.position === 'left' && `text-align: right;`}
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

// export const Indicator = styled.div`
//   position: absolute;
//   top: ${responsiveSize(-8)};

//   ${props => props.position === 'left' && `
//     right: ${responsiveSize(-8)};
//   `}

//   ${props => props.position === 'right' && `
//     left: ${responsiveSize(-8)};
//   `}
// `

// export const Doth = styled.div`
//   width: ${responsiveSize(16)};
//   height: ${responsiveSize(16)};

//   border-radius: 50%;

//   background-color: #00D563;
// `

export const Indicator = styled(TechBenefitItemIndicator)`
  /* position: absolute; */
  /* top: 0px; */
  /* right: 0px; */

  /* height: 100%; */
  /* position: absolute;
  top: 0px;
  bottom: 0px;
  left: 100%; */
`