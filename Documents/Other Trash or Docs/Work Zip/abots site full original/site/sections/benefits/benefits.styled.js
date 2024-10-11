import styled from 'styled-components';

import { Section as SectionCustom } from '@components'

import ServiceTypeCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled(ServiceTypeCard)`
  ${props => props.numberPerLine === 3 && `
    @media (min-width: 992px) {
      width: calc((100% - ${responsiveSize(64)}) / 3);

      :nth-child(-n+3) {
        margin-bottom: ${responsiveSize(32)};
      }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      width: calc((100% - ${responsiveSize(32)}) / 2);

      :not(:nth-last-child(-n+2)) {
        margin-bottom: ${responsiveSize(32)};
      }
    }
  `}

  ${props => props.numberPerLine === 4 && `
    @media (min-width: 1200px) {
      width: calc((100% - ${responsiveSize(96)}) / 4);

      :nth-child(-n+4) {
        margin-bottom: ${responsiveSize(32)};
      }
    }

    @media (min-width: 768px) and (max-width: 1199.98px) {
      width: calc((100% - ${responsiveSize(32)}) / 2);

      :not(:nth-last-child(-n+2)) {
        margin-bottom: ${responsiveSize(32)};
      }
    }
  `}

  @media (max-width: 767.98px) {
    width: 100%;
  }
`