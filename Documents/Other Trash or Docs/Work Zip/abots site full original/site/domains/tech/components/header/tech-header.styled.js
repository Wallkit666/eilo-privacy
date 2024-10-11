import styled from 'styled-components';

import { Menu as MenuCustom } from '@components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: ${responsiveSize(108)};

  background-color: #F5F5F6;

  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(56)};
  }
`

export const Menu = styled(MenuCustom)`
  background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
`
