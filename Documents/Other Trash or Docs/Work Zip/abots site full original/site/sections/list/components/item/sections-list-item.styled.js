import styled from 'styled-components';

// import ReactMarkdown from 'react-markdown'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  padding: ${responsiveSize(64)} 0px;

  display: flex;

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(32)} 0px;
  }
`

export const Number = styled.img`
  width: ${responsiveSize(169)};
  height: ${responsiveSize(84)};
  flex-shrink: 0;

  @media (max-width: 767.98px) {
    position: absolute;
    top: ${responsiveSize(10)};
    right: 0px;

    width: ${responsiveSize(169 * 0.6)};
    height: ${responsiveSize(84 * 0.6)};

    opacity: 0.4;
  }
`

export const Content = styled.div`
  @media (min-width: 768px) {
    margin-left: ${responsiveSize(64)};
  }
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(24)};

  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #FFFFFF;

  @media (max-width: 767.98px) {
    margin-right: ${responsiveSize(120)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Description = styled.span`
  font-weight: 400;
  font-size: ${responsiveSize(16)};
  line-height: 150%;

  color: #FFFFFF;

  ul {
    list-style: inside; 
  }

  p:not(:first-child) {
    margin-top: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

