import styled from 'styled-components';

import ServicesProcessesCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Card = styled(ServicesProcessesCard)`
  width: calc((100% - ${responsiveSize(40 * 2)}) / 3);

  @media (min-width: 768px) {
    :not(:last-child){
      margin-right: ${responsiveSize(40)};
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc((100% - ${responsiveSize(40)}) / 2);

    :nth-child(2) {
      margin-right: 0px;
    }

    :last-child {
      margin-top: ${responsiveSize(40)};
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;
    
    :not(:last-child){
      margin-bottom: ${responsiveSize(24)};
    }
  }
`
