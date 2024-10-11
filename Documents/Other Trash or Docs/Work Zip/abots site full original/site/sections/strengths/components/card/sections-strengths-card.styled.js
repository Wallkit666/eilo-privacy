import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(32)};
  min-height: 100%;

  display: flex;

  border: 1px solid rgba(31, 198, 122, 0.4);
  border-radius: ${responsiveSize(16)};

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: ${responsiveSize(24)};
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${responsiveSize(260)};
  height: ${responsiveSize(260)};

  margin-right: ${responsiveSize(32)};

  border-radius: ${responsiveSize(6)};
  background: url('/images/avatar.jpg') center no-repeat;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(32)};
    margin-right: 0px;
  }
`

export const Circle = styled.div`
  width: ${responsiveSize(80)};
  height: ${responsiveSize(80)};

  border-radius: 50%;

  background: #D9FAEC;
  opacity: 0.4;
`

export const Button = styled.div`
  background-color: #00D563;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  width: ${responsiveSize(60)};
  height: ${responsiveSize(60)};

  border-radius: 50%;

  cursor: pointer;
`

export const ButtonTitle = styled.span`
  font-weight: 600;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(19)};
  text-transform: uppercase;

  color: #FFFFFF;
`

export const Content = styled.div`
`

export const Name = styled.p`
  margin-bottom: ${responsiveSize(8)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  color: #FFFFFF;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }
`

export const Post = styled.p`
  margin-bottom: ${responsiveSize(24)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};
  color: #61E268;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(12)};
    line-height: ${responsiveSize(15)};
  }
`

export const Description = styled.p`
  font-size: ${responsiveSize(18)};
  line-height: 150%;
  color: #FFFFFF;
  white-space: pre-line;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`