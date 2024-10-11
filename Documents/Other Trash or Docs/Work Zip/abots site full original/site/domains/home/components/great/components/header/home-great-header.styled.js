import styled from 'styled-components';

import { Button as ButtonCustom} from '@components';
import { SectionTitle} from '@components/section';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 991.98px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  @media (min-width: 992px) {
    max-width: ${responsiveSize(688)};
    min-width: ${responsiveSize(560)};
    width: 100%;
    margin-right: ${responsiveSize(60)};
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    padding-bottom: ${responsiveSize(140)};
    align-items: center;
  }

  @media (max-width: 575.98px) {
    padding-bottom: ${responsiveSize(64)};
    width: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled(SectionTitle)`
  text-align: start;

  @media (max-width: 575.98px) {
    max-width: ${responsiveSize(300)};
  }
`

export const Button = styled(ButtonCustom)`
  margin-top: ${responsiveSize(54)};
  margin-right: auto;
  display: none;

  @media (min-width: 992px) {
    margin-right: auto;

    ${props => !props.mobile && `display: flex;`}
  }

  @media (max-width: 991.98px) {
    ${props => props.mobile && `display: flex;`}

    margin-left: auto;
  }

  @media (max-width: 575.98px) {
    margin-top: ${responsiveSize(34)};
    margin-bottom: ${responsiveSize(40)};
  }
`

export const Icon = styled.img`
  position: absolute;
  
  width: ${responsiveSize(233)};
  height: ${responsiveSize(126)};

  @media (min-width: 992px) {
    top: ${responsiveSize(123)};
    right: ${responsiveSize(57)};
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    width: ${responsiveSize(233 * 0.7)};
    height: ${responsiveSize(126 * 0.7)};
    top: ${responsiveSize(56)};
    left: 50%;
    transform: translateX(-${responsiveSize((233 / 2) * 0.7)});
  }

  @media (max-width: 575.98px) {
    width: ${responsiveSize(119)};
    height: ${responsiveSize(65)};
    top: ${responsiveSize(58)};
    right: 0px;
  }
`

export const Descriptions = styled.div`
  
`

export const Description = styled.p`
  font-size: ${responsiveSize(18)};
  line-height: 150%;

  color: #6C757D;

  :not(:last-child){
    margin-bottom: ${responsiveSize(30)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: ${responsiveSize(17)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(16)};
  }
`