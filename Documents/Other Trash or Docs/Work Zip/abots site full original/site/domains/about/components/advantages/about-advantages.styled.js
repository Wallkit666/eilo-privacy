import styled from 'styled-components';

import { SectionTitle } from "@components/section"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(54)};

  background: #FFFFFF;

  border: 1px solid #EAEBEC;
  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(24)};
  }
`
export const Group = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1199.98px) {
    flex-direction: column;
  }
`

export const Prewiew = styled.div`
  max-width: ${responsiveSize(720)};
  height: ${responsiveSize(480)};

  flex-shrink: 0;

  background: url('/images/about/prewiev.webp') no-repeat top;
  background-size: cover;
  border-radius: ${responsiveSize(16)};

  @media (min-width: 1200px) {
    flex: 1;
  }

  @media (max-width: 1199.98px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: ${responsiveSize(32)};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: ${responsiveSize(300)};
    margin-bottom: ${responsiveSize(24)};
  }

  @media (max-width: 575.98px) {
    height: ${responsiveSize(197)};
  }
`

export const Content = styled.div`
  flex: 1.1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    padding: 0px ${responsiveSize(54)};
  }
`

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(54)};
  /* font-family: 'Candal';
  font-size: ${responsiveSize(48)};
  line-height: ${responsiveSize(62)};

  color: #16252D; */

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};

    /* font-size: ${responsiveSize(28)};
    line-height: ${responsiveSize(36)}; */
  }
`

export const Description = styled.p`
  width: 100%;
  margin-bottom: ${responsiveSize(10)};
  
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #6C757D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`