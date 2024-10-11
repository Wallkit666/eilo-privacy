import styled from 'styled-components';

import { SectionTitle } from '@components/section'

import ServiceMobileApproachesItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  background-color: #FFFFFF;

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    border-radius: ${responsiveSize(24)};
  }
`

export const Title = styled(SectionTitle)`
  max-width: ${responsiveSize(1269)};
`

export const Item = styled(ServiceMobileApproachesItem)`
  :not(:last-child) {
    border-bottom: 1px solid #EAEBEC;
  }

  @media (min-width: 768px) {
    :first-child {
      padding-top: ${responsiveSize(54)};
    }

    :last-child {
      padding-bottom: ${responsiveSize(54)};
    }
  }
`