import styled from 'styled-components';

import { Section as SectionCustom } from '@components'
import { SectionTitle } from '@components/section'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), url("/images/servises/header.png") no-repeat;
  background-size: cover, cover;
`

export const Section = styled(SectionCustom)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${responsiveSize(108)};

  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(40)};
  }

  /* text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh; */
`


export const Content = styled.div`

  
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  
  max-width: ${responsiveSize(1010)};
  /* margin: auto; */

  @media (min-width: 768px) {
    padding-top: ${responsiveSize(25)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(28)};
  }
`

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(40)};

  @media (min-width: 1200px) {
    font-size: ${responsiveSize(52)};
    line-height: ${responsiveSize(67)};
  }

  /* @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(20)};
  } */
`

export const Subtitle = styled.p`
  margin-bottom: ${responsiveSize(64)};

  font-family: 'Candal';
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(31)};
  text-align: center;
  text-transform: uppercase;
  color: #00D563;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(28)};
  }
`

export const Tag = styled.p`
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};
  text-align: center;
  color: #00D563;
`