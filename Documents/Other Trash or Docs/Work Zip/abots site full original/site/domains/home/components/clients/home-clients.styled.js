import styled from 'styled-components';

import HomeClientsItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-between; */
`

export const Item = styled(HomeClientsItem)`
  width: calc((100% - ${responsiveSize(40 * 3)}) / 4);


  /* @media (min-width: 576px) and (max-width: 1199.98px) {
    :nth-child(4), :nth-child(5) {
      display: none;
    }
  } */

  @media (min-width: 992px) {
    :nth-child(-n+5) {
      margin-bottom: ${responsiveSize(32)};
    }

    :not(:nth-child(4n)) {
      margin-right: ${responsiveSize(20)};
    }
  }
  

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc((100% - ${responsiveSize(32 * 2)}) / 3);

    :nth-child(-n+5) {
      margin-bottom: ${responsiveSize(32)};
    }

    :not(:nth-child(3n)) {
      margin-right: ${responsiveSize(32)};
    }

    /* :nth-child(10) {
      display: none;
    } */
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc((100% - ${responsiveSize(16 * 2)}) / 3);

    :nth-child(-n+5) {
      margin-bottom: ${responsiveSize(16)};
    }

    :not(:nth-child(3n)) {
      margin-right: ${responsiveSize(16)};
    }

    /* :nth-child(10) {
      display: none;
    } */
  }

  @media (max-width: 575.98px) {
    width: calc((100% - ${responsiveSize(16)}) / 2);

    :nth-child(-n+7) {
      margin-bottom: ${responsiveSize(16)};
    }

    :not(:nth-child(2n)) {
      margin-right: ${responsiveSize(16)};
    }

    /* :nth-child(5) {
      display: none;
    } */
  }
`