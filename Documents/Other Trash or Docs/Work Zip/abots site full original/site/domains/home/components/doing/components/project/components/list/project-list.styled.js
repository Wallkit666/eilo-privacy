import styled from 'styled-components';


import ProjectListItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(56)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  background-color: #F5F5F6;
  border-radius: ${responsiveSize(24)} 0px 0px ${responsiveSize(24)};

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-left: ${responsiveSize(32)};
    padding-right: ${responsiveSize(32)};
  }
`

export const Title = styled.h3`
  margin-bottom: ${responsiveSize(42)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: 150%;

  color: #16252D;
`

export const Content = styled.div`
  flex: 1;
  padding-right: ${responsiveSize(8)};

  overflow-y: auto;
`

export const Item = styled(ProjectListItem)`
  :not(:last-child){
    margin-bottom: ${responsiveSize(8)};
  }
`