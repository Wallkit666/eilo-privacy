import styled from 'styled-components';

import { Section as SectionCustom, Menu as MenuCustom } from "@components"

import { responsiveSize } from "@utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: url("/images/service/hero.webp") no-repeat center center;
  background-size: cover;
`

export const Section = styled(SectionCustom)`
  height: 100%;
`

export const Container = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  display: flex;

  z-index: 2;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${responsiveSize(108 + 140)};

  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(108)};
  }
`

export const Icon = styled.div`
  height: ${responsiveSize(180)};
  margin-top: ${responsiveSize(32)};
  width: 100%;

  background: url("${props => props.image}") no-repeat center center;
  background-size: contain;

  @media (max-width: 767.98px) {
    height: ${responsiveSize(189)};
    margin-top: ${responsiveSize(16)};
  }
`

export const Preview = styled.div`
  height: ${responsiveSize(250)};
  margin-top: ${responsiveSize(32)};
  width: 100%;

  background: url("${props => props.image}") no-repeat center center;
  background-size: contain;

  @media (max-width: 767.98px) {
    height: ${responsiveSize(200)};
    margin-top: ${responsiveSize(16)};
  }
`

export const Menu = styled(MenuCustom)`
  background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
`