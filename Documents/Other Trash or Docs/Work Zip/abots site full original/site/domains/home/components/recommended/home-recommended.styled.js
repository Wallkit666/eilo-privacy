import styled from 'styled-components';

import { Rating as RatingCustom } from "@components"
import { SectionTitle, SectionDescription } from "@components/section"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(48)};

  color: #FFFFFF;

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-bottom: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};
  }
`

export const Description = styled(SectionDescription)`
  /* margin-bottom: ${responsiveSize(64)}; */
  max-width: ${responsiveSize(850)};

  color: #fff !important;
  font-weight: 600;

  /* @media (min-width: 768px) and (max-width: 991.98px) {
    margin-bottom: ${responsiveSize(48)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};
  } */
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`

export const Icon = styled.img`
  width: ${responsiveSize(176)};
  height: ${responsiveSize(50)};

  @media (max-width: 767.98px) {
    width: ${responsiveSize(140)};
    height: ${responsiveSize(40)};
  }

  @media (max-width: 575.98px) {
    margin-bottom: ${responsiveSize(24)};
  }
`

export const Rating = styled(RatingCustom)`

  @media (min-width: 768px) {
    margin-left: ${responsiveSize(48)};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-left: ${responsiveSize(24)};
  }
`