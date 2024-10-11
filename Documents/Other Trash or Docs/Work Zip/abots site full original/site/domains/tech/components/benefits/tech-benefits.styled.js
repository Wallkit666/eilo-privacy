import styled from 'styled-components';

import TechBenefitsItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(80)};

  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};
  text-align: center;

  color: #00D563;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(40)};
  }

`

export const Item = styled(TechBenefitsItem)`
  /* :last-child{
    border: none;
  } */

  /* :not(:last-child){
    padding-bottom: ${responsiveSize(103)}; 
  } */
`

export const Group = styled.div`
  :not(:last-child){
    margin-bottom: ${responsiveSize(80)};
  }

  @media (max-width: 767.98px) {
    :not(:last-child){
      margin-bottom: ${responsiveSize(40)};
    }
  }
`

// ${responsiveSize(1000)}