import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

import ProjectPlatformItem from './components/item'

export const Container = styled.div`
  padding: ${responsiveSize(56)};

  flex: 1;

  background: #FFFFFF;
  border-radius: 0px ${responsiveSize(24)} ${responsiveSize(24)} 0px;

  display: flex;
  flex-direction: column;

  position: relative;

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-left: ${responsiveSize(32)};
    padding-right: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    padding: 0px;
  }
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(24)};

  font-weight: 600;
  font-size: ${responsiveSize(32)};
  line-height: ${responsiveSize(39)};

  color: #16252D;

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Description = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: 150%;

  color: #16252D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(12)};
  }
`

export const Content = styled.div`
  margin-top: ${responsiveSize(48)};

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(16)};
  }
`

export const Item = styled(ProjectPlatformItem)`
  width: calc(100% / 4);

  @media (min-width: 992px) {
    margin-bottom: ${responsiveSize(32)};
    
    :nth-child(5) {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% / 3);

    :last-child {
      flex: 1;
    }
  }

  @media (max-width: 767.98px) {
    width: calc(100% / 2);

    :not(:last-child) {
      margin-bottom: ${responsiveSize(16)};
    }

    :last-child {
      width: 100%
    }
  }
`