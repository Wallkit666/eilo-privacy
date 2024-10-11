import styled from 'styled-components';

import TechManagementCadr from './components/card'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  margin-right: ${responsiveSize(83)};
`

export const Card = styled(TechManagementCadr)`
  :not(:last-child){
    margin-bottom: ${responsiveSize(32)};
  }
`

export const Preview = styled.img`
  height: ${responsiveSize(338)};
  width: ${responsiveSize(440)};

`

