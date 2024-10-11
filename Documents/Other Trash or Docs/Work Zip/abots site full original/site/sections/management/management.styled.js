import styled from 'styled-components';

import TechManagementCadr from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 991.98px) {
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  @media (min-width: 992px) {
    margin-right: ${responsiveSize(83)};
  }
`

export const Card = styled(TechManagementCadr)`
  :not(:last-child){
    margin-bottom: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    :not(:last-child){
      margin-bottom: ${responsiveSize(24)};
    }
  }
`

export const Preview = styled.img`
  max-width: 23vw;
  max-height: 17.5vw;

  @media (max-width: 991.98px) {
    margin: 0px auto ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    max-width: ${responsiveSize(290)};
    max-height: ${responsiveSize(223)};
  }
`

