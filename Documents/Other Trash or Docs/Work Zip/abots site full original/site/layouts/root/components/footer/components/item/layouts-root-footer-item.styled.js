import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: ${responsiveSize(12)};
  width: ${responsiveSize(20)};
  height: ${responsiveSize(20)};

  background: url(${props => props.url}) no-repeat center center;
  background-size: contain;
`

export const Header = styled.div`
  padding: ${responsiveSize(10)};
  margin-bottom: ${responsiveSize(16)};

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};
  color: #FFFFFF;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(20)};
  }

  @media (max-width: 576.98px) {
    ${props => props.type === "social" && `text-align: center;`}
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576.98px) {
    ${props => props.type === "social" && `
      flex-direction: row;
      justify-content: space-between;
      padding: 0px ${responsiveSize(32)};
    `}
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: ${responsiveSize(10)};

  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 767.98px) {
    :not(:last-child) {
      margin-bottom: ${responsiveSize(4)};
    }
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};

  color: #FFFFFF;

  @media (max-width: 576.98px) {
    ${props => props.type === "social" && `display: none;`}
  }
`