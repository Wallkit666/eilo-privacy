import styled from 'styled-components';

import TechPrinciplesItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);

  border: 1px solid #EAEBEC;

  border-radius: ${responsiveSize(24)};

  /* overflow: hidden; */
`

export const Item = styled(TechPrinciplesItem)`
  @media (min-width: 1199px) {
    width: calc(100% /  4);

    :not(:nth-child(4n+4)) {
      border-right: 1px solid #EAEBEC;
    }
    
    :not(:nth-last-child(-n+4)) {
      border-bottom: 1px solid #EAEBEC;
    }

    :nth-child(1) {
      border-top-left-radius: ${responsiveSize(24)};
    }

    :nth-child(4) {
      border-top-right-radius: ${responsiveSize(24)};
    }

    :nth-last-child(4) {
      border-bottom-left-radius: ${responsiveSize(24)};
    }

    :nth-last-child(1) {
      border-bottom-right-radius: ${responsiveSize(24)};
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc(100% /  3);

    :nth-child(1) {
      border-top-left-radius: ${responsiveSize(24)};
    }

    :nth-child(3) {
      border-top-right-radius: ${responsiveSize(24)};
    }

    :nth-last-child(3) {
      border-bottom-left-radius: ${responsiveSize(24)};
    }

    :nth-last-child(1) {
      border-bottom-right-radius: ${responsiveSize(24)};
    }

    :not(:nth-last-child(-n+3)) {
      border-bottom: 1px solid #EAEBEC;
    }

    :not(:nth-child(3n+3)) {
      border-right: 1px solid #EAEBEC;
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child) {
      border-bottom: 1px solid #EAEBEC;
    }

    :first-child {
      border-radius: ${responsiveSize(24)} ${responsiveSize(24)} 0px 0px;
    }

    :last-child {
      border-radius: 0px 0px ${responsiveSize(24)} ${responsiveSize(24)};
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child) {
      border-bottom: 1px solid #EAEBEC;
    }

    :first-child {
      border-radius: ${responsiveSize(24)} ${responsiveSize(24)} 0px 0px;
    }

    :last-child {
      border-radius: 0px 0px ${responsiveSize(24)} ${responsiveSize(24)};
    }
  }
`

// ${responsiveSize(1000)}