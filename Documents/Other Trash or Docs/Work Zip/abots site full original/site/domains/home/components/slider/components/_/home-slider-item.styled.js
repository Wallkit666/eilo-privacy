import styled from 'styled-components';

import { Button as ButtonCustom } from '@components';

import PreviewSVG from '../../images/preview'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: ${responsiveSize(74)};

  background-color: #F5F5F6;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  font-family: 'Candal';
  font-size: ${responsiveSize(56)};
  line-height: ${responsiveSize(73)};

  color: #16252D;

  font-family: 'Candal';
`

export const Description = styled.span`
  margin-top: ${responsiveSize(32)};

  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #16252D;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${responsiveSize(780)};
`

export const Preview = styled(PreviewSVG)`
  width: ${responsiveSize(723)};
  height: ${responsiveSize(703)};
  margin-left: ${responsiveSize(-24)};
  flex-shrink: 0;
`

export const Button = styled(ButtonCustom)`
  margin-right: auto;
  margin-top: ${responsiveSize(64)};
`