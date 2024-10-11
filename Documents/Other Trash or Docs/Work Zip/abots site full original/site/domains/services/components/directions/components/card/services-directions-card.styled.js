import styled from 'styled-components';

import { Tags as TagsCustom } from "@components"

import { responsiveSize } from "@utils/responsive";

export const Content = styled.div`
  flex: 1.2;
  flex-shrink: 1;

  display: flex;
  /* align-items: center; */

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  display: flex;
  flex-shrink: 2;
  
  @media (min-width: 1200px) {
    flex: 1;
    padding-right: ${responsiveSize(32)};
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(36)};
  line-height: ${responsiveSize(44)};

  color: #16252D;

  transition: all 0.4s;

  @media (max-width: 1199.98px) and (min-width: 768px) {
    margin-bottom: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(16)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Preview = styled.div`
  min-height: ${responsiveSize(160)};

  border-radius: ${responsiveSize(6)};
  background: #F5F5F6 url(${props => props.image}) no-repeat center center;
  background-size: cover;

  transition: all 0.4s;

  @media (min-width: 768px) {
    max-width: ${responsiveSize(230)};
    flex: 1;
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: ${responsiveSize(239)};
    margin-bottom: ${responsiveSize(16)};
  }
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  transition: all 0.4s;

  @media (min-width: 768px) {
    margin-left: ${responsiveSize(40)};
  }
`

export const Tags = styled(TagsCustom)`
  @media (min-width: 768px) {
    margin-bottom: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Description = styled.p`
  margin-top: auto;

  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #6C757D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

export const Container = styled.div`
  position: relative;
  padding: ${responsiveSize(54)} ${responsiveSize(64)} ${responsiveSize(54)} ${responsiveSize(64)};

  display: flex;

  background-color: #fff;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.14);
    border-color: transparent;

    z-index: 1;

    & ~ div {
      border-color: transparent;
    }

    ${Preview} {
      transform: scale(0.9);
    }

    ${Meta}, ${Title} {
      opacity: 0.7;
    }
  }

  

  @media (min-width: 1200px) {
    align-items: center;
  }

  @media (max-width: 1199.98px) {
    flex-direction: column;
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(32)} ${responsiveSize(16)};
  }
`