import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

import { SectionTitle, SectionDescription } from "@components/section"

import PortfolioDoingCard from './components/card'

export const Container = styled.div`
  display: flex;
`

export const Info = styled.div`
  flex: 1;
  position: relative;
  flex-shrink: 3;
`

export const Title = styled(SectionTitle)`
  text-align: left;
`

export const Description = styled(SectionDescription)`
  margin-top: ${responsiveSize(42)};

  text-align: left;
`

export const Content = styled.div`
  margin-left: ${responsiveSize(59)};

  display: flex;
  flex-wrap: wrap;

  flex: 1.7;

  border: 1px solid #EAEBEC;
  filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.04));
  border-radius: 24px;
`

export const Item = styled(PortfolioDoingCard)`
  width: 50%;

  :first-child{
    border-right: 1px solid #EAEBEC;
    border-bottom: 1px solid #EAEBEC;
  }

  :last-child{
    border-top: 1px solid #EAEBEC;
    border-left: 1px solid #EAEBEC;
  }
`

