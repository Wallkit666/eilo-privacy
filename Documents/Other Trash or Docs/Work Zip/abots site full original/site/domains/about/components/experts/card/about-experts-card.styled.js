import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Name = styled.p`
  margin-bottom: ${responsiveSize(8)};

  font-weight: 600;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  text-align: center;

  color: #FFFFFF;

  transition: all 0.4s;
`

export const Profession = styled.p`
  font-weight: 400;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};
  text-align: center;

  color: #61E268;

  transition: all 0.4s;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(384)};

  border-radius: ${responsiveSize(6)};

  transition: all 0.4s;

  :hover {
    background: #00D563;

    ${Name} {
      color: #fff;
    }

    ${Profession} {
      color: #fff;
    }
  }

  @media (max-width: 767.98px) {
    width: 82vw;
    max-width: ${responsiveSize(308)};
  }
`

export const Icon = styled.div`
  width: 100%;
  height: ${responsiveSize(420)};

  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;

  border-radius: ${responsiveSize(6)};
`

export const Content = styled.div`
  padding: ${responsiveSize(24)} 0px;
`