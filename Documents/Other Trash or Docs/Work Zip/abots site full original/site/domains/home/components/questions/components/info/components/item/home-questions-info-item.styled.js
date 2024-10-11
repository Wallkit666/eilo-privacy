import styled from 'styled-components';

import {Icon as IconCustom} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${responsiveSize(12)} 0px;

  transition: all 0.4s;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(8)} 0px;
  }
`

export const Title = styled.span`
  margin-left: ${responsiveSize(16)};

  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};
  color: #16252D;

  ${props => props.bold && `  
    font-weight: 600;
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  `}
`

export const Icon = styled(IconCustom)`
  @media (max-width: 767.98px) {
    width: ${responsiveSize(16)};
    height: ${responsiveSize(16)};
  }
`