import styled from 'styled-components';

import { Button as ButtonCustom, Section as SectionCustom } from '@components';

import LayoutsRootFooterItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`

export const Section = styled(SectionCustom)`
  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(54)};
    padding-bottom: ${responsiveSize(24)}
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${responsiveSize(400)};
  width: 100%;

  @media (max-width: 991.98px) {
    max-width: ${responsiveSize(250)};
  }

  @media (max-width: 767.98px) {
    max-width: 100%;
  }
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: ${responsiveSize(100)};
  height: ${responsiveSize(60)};

  cursor: pointer;
  user-select: none;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(75)};
    height: ${responsiveSize(40)};
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(65)};
    height: ${responsiveSize(35)};
  }
`

export const Description = styled.p`
  margin-top: ${responsiveSize(24)};
  margin-bottom: ${responsiveSize(58)};

  font-size: ${responsiveSize(16)};
  line-height: 160%;

  color: #FFFFFF;
  white-space: pre;

  @media (max-width: 991.98px) {
    /* margin-right: ${responsiveSize(60)}; */
    max-width: ${responsiveSize(250)};
    white-space: normal;
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(12)};

    margin-top: ${responsiveSize(16)};
    margin-bottom: ${responsiveSize(32)};
    max-width: 100%;
  }
`

export const Button = styled(ButtonCustom)`
  display: none;

  @media (min-width: 768px) {
    margin-right: auto;

    ${props => !props.mobile && `display: flex;`}
  }

  @media (max-width: 767.98px) {
    ${props => props.mobile && `display: flex;`}
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Item = styled(LayoutsRootFooterItem)`
  @media (min-width: 1200px) {
    margin-left: ${responsiveSize(116)};
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    margin-left: ${responsiveSize(50)};
  }

  /* @media (min-width: 576px) and (max-width: 767.98px) {
    :not(:first-child) {
      margin-left: ${responsiveSize(32)};
    }
  } */

  @media (max-width: 575.98px) {
    :not(:last-child) {
      flex: 1;
    }
    
    :first-child {
      margin-right: ${responsiveSize(32)};
    }

    :last-child {
      width: 100%;
      margin-top: ${responsiveSize(32)};
    }
  }
`