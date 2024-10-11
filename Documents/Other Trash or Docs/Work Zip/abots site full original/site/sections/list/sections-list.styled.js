import styled from 'styled-components';

import { SectionTitle, SectionDescription } from '@components/section'

import SectionsListItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  

  @media (max-width: 1199.98px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
`

export const Info = styled.div`
  @media (min-width: 1200px) {
    max-width: ${responsiveSize(578)};
    /* position: sticky;
    top: ${responsiveSize(108 + 32)}; */
    position: relative;
    margin-right: ${responsiveSize(59)};
  }

  @media (max-width: 1199.98px) {
    margin: 0px auto;
  }
`

export const InfoContent = styled.div`
  position: sticky;
  top: ${responsiveSize(108 + 32)};

`

export const Title = styled(SectionTitle)`
  @media (min-width: 1200px) {
    text-align: start;
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    margin-bottom: ${responsiveSize(64)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};
  }
`

export const Description = styled(SectionDescription)`
  margin-top: ${responsiveSize(32)};
  
  text-align: start;
  color: rgba(255, 255, 255, 0.8);
`

export const Item = styled(SectionsListItem)`
  :last-child {
    padding-bottom: 0px;
  }

  @media (min-width: 768px) {
    :first-child {
      padding-top: 0px;
    }

    :not(:first-child){ 
      border-top: 1px solid rgba(217, 250, 236, 0.1);
    }
  }

  @media (max-width: 767.98px) {
    border-top: 1px solid rgba(217, 250, 236, 0.1);
  }
`