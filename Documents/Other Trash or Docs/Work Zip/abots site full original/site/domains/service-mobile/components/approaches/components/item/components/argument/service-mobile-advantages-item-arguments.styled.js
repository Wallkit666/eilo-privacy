import styled from 'styled-components';

import { Icon as IconCustom } from '@components'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  min-height: ${responsiveSize(24)};
`

export const Title = styled.p`
  margin-left: ${responsiveSize(16)};

  font-size: ${responsiveSize(14)};
  line-height: 150%;

  color: #16252D;

  @media (max-width: 767.98px) {
    margin-left: ${responsiveSize(8)};
  }
`

export const Icon = styled(IconCustom)`
  margin-top: 1.5px;
  margin-right: 8px;
`
