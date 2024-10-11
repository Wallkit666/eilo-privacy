import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(54)};

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(36)};
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    width: calc((100% - ${responsiveSize(21)}) / 3);
    padding: 0px ${responsiveSize(32)};

    :not(:last-child){
      margin-right: ${responsiveSize(10)};
    }
  }

  @media (max-width: 1199.98px) {
    width: 100%;
   
    :not(:last-child) {
      margin-bottom: ${responsiveSize(16)};
    }
  }

  @media (max-width: 767.98px) {
    flex-direction: column;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(24)};
    }
  }
`

export const Number = styled.p`
  font-family: 'Candal';
  font-size: ${responsiveSize(64)};
  line-height: ${responsiveSize(83)};

  color: #00D563;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(16)};

    font-size: ${responsiveSize(36)};
    line-height: ${responsiveSize(47)};
    text-align: center;
  }
`

export const Title = styled.h6`
  margin-left: ${responsiveSize(40)};

  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(32)};

  color: #6C757D;

  @media (max-width: 767.98px) {
    margin-left: ${responsiveSize(0)};

    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(22)};
    text-align: center;
  }
`