import styled from 'styled-components';

import ServicesProcessesCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled(ServicesProcessesCard)`
  @media (min-width: 1200px) {
    width: calc((100% - ${responsiveSize(80)}) / 3);

    :not(:last-child){
      margin-right: ${responsiveSize(40)};
    }
  }

  @media (min-width: 768px) and (max-width: 1199.99px) {
    width: calc((100% - ${responsiveSize(40)}) / 2);

    :nth-child(even) {
      margin-left: ${responsiveSize(40)};
    }

    :nth-child(-n+2) {
      margin-bottom: ${responsiveSize(40)};
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child){
      margin-bottom: ${responsiveSize(24)};
    }
  }
`
