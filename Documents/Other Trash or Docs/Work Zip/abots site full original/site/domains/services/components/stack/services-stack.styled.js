import styled from 'styled-components';

import { SectionTitle } from "@components/section"

import ServicerStackItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`

export const Content = styled.div`
  flex: 1.2;
  flex-shrink: 1;

  @media (min-width: 768px) {
    border-radius: ${responsiveSize(24)};
    border: 1px solid rgba(217, 250, 236, 0.1);

    overflow: hidden;
  }
`

export const Info = styled.div`
  flex: 1;
  position: relative;
  flex-shrink: 3;
`

export const Title = styled(SectionTitle)`
  @media (min-width: 1200px) {
    position: sticky;
    top: ${responsiveSize(108 + 32)};

    text-align: start;
  }

  @media (max-width: 1199.98px) {
    margin-bottom: ${responsiveSize(64)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};
  }
`

export const Item = styled(ServicerStackItem)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(16)};
  }
`