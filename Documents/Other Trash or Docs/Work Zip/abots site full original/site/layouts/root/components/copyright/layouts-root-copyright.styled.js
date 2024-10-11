import styled from 'styled-components';

import {Section as SectionCustom} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(10)} 0px;
`

export const Value = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: 160%;
  text-align: center;
  color: #FFFFFF;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(10)};
  }
`

export const Section = styled(SectionCustom)`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`