import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${responsiveSize(4)};

  @media (max-width: 576.98px) {
    justify-content: center;
  }
`

export const Value = styled.span`
  margin-right: ${responsiveSize(4)};

  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: 160%;
  color: #FFFFFF;
`

export const Label = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;
  color: #FFFFFF;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${responsiveSize(8)};
`

export const Description = styled.p`
  font-size: ${responsiveSize(14)};
  line-height: 160%;
  color: #FFFFFF;

  @media (max-width: 576.98px) {
    text-align: center;
  }
`