import styled from 'styled-components';

import { Section as SectionCustom } from "@components"

import { SectionDescription } from "@components/section"

import { responsiveSize } from "@utils/responsive";

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
  justify-content: center;

  max-width: ${responsiveSize(370)};
`

export const Description = styled(SectionDescription)`
  margin-top: ${responsiveSize(54)};

  color: #343A40;

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(24)};
  }
`

export const Preview = styled.div`
  margin-top: ${responsiveSize(32)};

  width: ${responsiveSize(160)};
  height: ${responsiveSize(160)};

  background: url("${props => props.image}") no-repeat center center;
  background-size: contain;
  
  transition: all 0.4s;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(60)};
    height: ${responsiveSize(60)};
    margin-top: ${responsiveSize(16)};
  }
`