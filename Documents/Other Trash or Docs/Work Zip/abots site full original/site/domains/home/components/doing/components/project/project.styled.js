import styled from 'styled-components';

import HomeDoingProjectList from './components/list'
import HomeDoingProjectCollapse from './components/collapse'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  max-height: ${responsiveSize(652)};
  
  @media (min-width: 768px) {
    min-height: ${responsiveSize(550)};
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: ${responsiveSize(16)} ${responsiveSize(16)} 0px;

    max-height: 90vh;
  }
`

export const List = styled(HomeDoingProjectList)`
  flex: 1;
  max-width: ${responsiveSize(511)};
  min-width: ${responsiveSize(320)};

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Info = styled.div`
  flex: 2.6;

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Body = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

export const Collapse = styled(HomeDoingProjectCollapse)`
  margin-bottom: ${responsiveSize(8)};

  :last-child {
    margin-bottom: ${responsiveSize(16)};
  }
`

export const Title = styled.h3`
  margin-bottom: ${responsiveSize(24)};

  font-family: 'Candal';
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(36)};

  color: #16252D;

  @media (min-width: 768px) {
    display: none;
  }
`