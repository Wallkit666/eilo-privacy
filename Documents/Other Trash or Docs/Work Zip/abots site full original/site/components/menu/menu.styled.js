import styled from 'styled-components';

import { Section as CustomSection } from "@components"

import TechHeaderMenuItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Section = styled(CustomSection)`
  position: relative;
  z-index: 1;
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(54)};

  font-weight: 400;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};
  text-align: center;
  color: #343A40;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(28)};
  }
`

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Item = styled(TechHeaderMenuItem)`
  @media (min-width: 1200px) {
    flex: 1;

    :not(:last-child){
      margin-right: ${responsiveSize(32)};
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc((100% - ${responsiveSize(32)}) / 2);

    :nth-child(1), :nth-child(3) {
      margin-right: ${responsiveSize(32)};
    }

    :not(:nth-last-child(-n+2)) {
      margin-bottom: ${responsiveSize(32)};
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;

    :not(:last-child){
      margin-bottom: ${responsiveSize(8)};
    }
  }
`
