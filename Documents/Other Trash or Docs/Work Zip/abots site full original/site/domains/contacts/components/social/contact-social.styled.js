import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${responsiveSize(46)} 0px ${responsiveSize(64)};

  @media (max-width: 1349.98px) {
    padding: ${responsiveSize(112)} 0px ${responsiveSize(64)};
    justify-content: center;
  }
`

export const Item = styled.a`
  padding: ${responsiveSize(10)};
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (min-width: 992px) {
    :not(:last-child) {
      margin-right: ${responsiveSize(84)};
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    :not(:last-child) {
      margin-right: ${responsiveSize(50)};
    }
  }

  @media (max-width: 767.98px) {
    width: 50%;
    justify-content: center;
  }
`

export const Icon = styled.div`
  flex-shrink: 0;
  width: ${responsiveSize(44)};
  height: ${responsiveSize(44)};

  background: url(${props => props.url}) no-repeat center center;
  background-size: contain;
`

export const Label = styled.span`
  margin-left: ${responsiveSize(10)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};
  color: #FFFFFF;
`