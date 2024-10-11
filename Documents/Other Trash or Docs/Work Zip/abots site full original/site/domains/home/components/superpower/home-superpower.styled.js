import styled from 'styled-components';

import { Section as SectionCustom } from '@components'

import HomaSuperpowerCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Section = styled(SectionCustom)`
  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(80)};
    padding-bottom: ${responsiveSize(80)};
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${responsiveSize(16)};

  @media (max-width: 575.98px) {
    flex-direction: column;

    padding-top: ${responsiveSize(0)};
  }
`

export const Card = styled(HomaSuperpowerCard)`
  width: calc((100% - ${responsiveSize(40)}) / 2);

  :nth-child(-n+2) {
    margin-bottom: ${responsiveSize(40)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc((100% - ${responsiveSize(24)}) / 2);

    :nth-child(-n+2) {
      margin-bottom: ${responsiveSize(24)};
    }
  }
  
  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(24)};
    }
  }
`