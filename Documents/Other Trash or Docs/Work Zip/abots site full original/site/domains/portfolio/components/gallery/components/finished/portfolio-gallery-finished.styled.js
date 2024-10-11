import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(101)} ${responsiveSize(64)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #00D563;

  border: 1px solid #61E268;
  border-radius: ${responsiveSize(24)};

`

export const Number = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(80)};
  line-height: ${responsiveSize(98)};

  color: #FFFFFF;
`

export const Title = styled.p`
  margin-top: ${responsiveSize(32)};

  font-weight: 600;
  font-size: ${responsiveSize(32)};
  line-height: ${responsiveSize(39)};

  color: #FFFFFF;
`
