import styled from 'styled-components';

import { Section as SectionCustom } from '@components'

import ServicesDirectionCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  /* padding: ${responsiveSize(10)} 0px; */

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};
  background: #FFFFFF;
`

export const Card = styled(ServicesDirectionCard)`
  :first-child {
    border-radius: ${responsiveSize(24)} ${responsiveSize(24)} 0px 0px;
  }

  :last-child {
    border-radius: 0px 0px ${responsiveSize(24)} ${responsiveSize(24)};
  }

  :not(:first-child){
    border-top: 1px solid #EAEBEC;
  }
`

export const Section = styled(SectionCustom)`
  @media (max-width: 767.98px) {
    margin-top: 0px;
  }
`
