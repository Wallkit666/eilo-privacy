import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  min-width: ${responsiveSize(144)};
  padding: 0px ${responsiveSize(16)};
  height: ${responsiveSize(40)};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00D563;
  border-radius: ${responsiveSize(6)};

  cursor: pointer;
  transition: all 0.4s;

  ${props => props.size === 'big' && `
    height: ${responsiveSize(50)};
  `}

  ${props => props.size === 'bigger' && `
    height: ${responsiveSize(54)};
    padding: ${responsiveSize(16)} ${responsiveSize(48)};
  `}

  ${props => props.theme === 'green-light' && `
    background-color: rgba(217, 250, 236, 0.6);`
  }

  :hover{
    transform: scale(0.95);
  }
`

export const Title = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};
  text-align: center;
  color: #FFFFFF;

  ${props => props.theme === 'green-light' && `
    color: #00D563;`
  }
`