import styled from 'styled-components';

import StatisticsItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled(StatisticsItem)`
  width: calc(100% / 3);

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% / 2);
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(40)};
    }
  }
`
