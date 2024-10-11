import styled from 'styled-components';

import { Tags as TagsCustom } from '@components'

import { responsiveSize } from "@utils/responsive";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${responsiveSize(24)};

  border: 1px solid #F5F5F6;
  background: #fff url("${props => props.image}") no-repeat center center;
  background-size: contain;

  width: ${responsiveSize(100)};
  height: ${responsiveSize(100)};
  
  transition: all 0.4s;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(40)};
    height: ${responsiveSize(40)};
    margin-right: ${responsiveSize(10)};

    border-radius: ${responsiveSize(6)};
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(28)};
  line-height: ${responsiveSize(34)};

  color: #FFFFFF;

  transition: all 0.4s;

  @media (min-width: 768px) {
    margin-top: ${responsiveSize(16)};
  }
`

export const Container = styled.div`
  display: flex;

  cursor: pointer;

  :hover {
    ${Icon}, ${Title} {
      transform: scale(0.8)
    }
  }

  ${props => props.position === 'right' && `flex-direction: row-reverse;`}

  @media (max-width: 767.98px) {
    flex-direction: column;

    border-radius: ${responsiveSize(24)};
    border: 1px solid rgba(217, 250, 236, 0.1);

    overflow: hidden;
  }
`

export const Preview = styled.div`
  flex: 1;
  /* height: ${responsiveSize(280)}; */
  padding: ${responsiveSize(56)} ${responsiveSize(36)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.12);

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(16)};
    flex-direction: row;
  }
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${responsiveSize(24)} ${responsiveSize(36)};

  background-color: transparent;

  @media (min-width: 768px) {
    min-height: ${responsiveSize(280)};
  }
`

export const Description = styled.p`
  margin-top: ${responsiveSize(16)};

  font-weight: 400;
  font-size: ${responsiveSize(14)};
  line-height: 150%;

  color: #FFFFFF;

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(24)};

    text-align: center;
  }
`

export const Tags = styled(TagsCustom)`
  @media (max-width: 767.98px) {
    display: none;
  }
`

export const TagsMobile = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #00D563;

  @media (min-width: 768px) {
    display: none;
  }
`