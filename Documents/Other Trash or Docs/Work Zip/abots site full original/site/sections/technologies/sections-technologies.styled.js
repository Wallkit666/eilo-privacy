import styled from 'styled-components';

import { Button as ButtonCustom } from '@components'

import SectionsTechnologiesCard from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled(SectionsTechnologiesCard)`
  @media (min-width: 1350px) {
    width: calc((100% - ${responsiveSize(32 * 3)}) / 4);

    :not(:last-child) {
      margin-right: ${responsiveSize(32)};
    }
  }

  @media (min-width: 768px) and (max-width: 1349.98px) {
    width: calc((100% - ${responsiveSize(32)}) / 2);

    :nth-child(2n+1) {
      margin-right: ${responsiveSize(32)};
    }

    :nth-child(-n+2) {
      margin-bottom: ${responsiveSize(32)};
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(16)};
    }
  }
`

export const Button = styled(ButtonCustom)`
  margin: ${responsiveSize(54)} auto 0px;
`