import styled from 'styled-components';

import SectionPartners from '@sections/partners'

import TechBenefits from './components/benefits'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  /* width: 100%; */
  overflow-x: hidden;
`

export const Benefits = styled(TechBenefits)`
  position: relative;
  z-index: 1;
`

export const Partners = styled(SectionPartners)`
  position: relative;
  z-index: 1;
`