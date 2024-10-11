import styled from 'styled-components';

import HomeClientsItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Item = styled(HomeClientsItem)`
  width: calc((100% - ${responsiveSize(162)}) / 4);

  cursor: pointer;

  @media (min-width: 992px) {
    :nth-child(-n+4) {
      margin-bottom: ${responsiveSize(54)};
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc((100% - ${responsiveSize(96)}) / 4);

    :not(:nth-last-child(-n+4)) {
      margin-bottom: ${responsiveSize(32)};
    }
  }

  @media (max-width: 767.98px) {
    width: calc((100% - ${responsiveSize(16)}) / 2);

    :not(:nth-last-child(-n+2)) {
      margin-bottom: ${responsiveSize(16)};
    }
  }
`