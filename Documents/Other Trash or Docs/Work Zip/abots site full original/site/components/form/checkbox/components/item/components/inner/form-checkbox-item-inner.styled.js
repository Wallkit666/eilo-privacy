import styled from "styled-components";

import IconCustom from "@components/icon"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${responsiveSize(24)};
  height: ${responsiveSize(24)};

  border: 1px solid #00D563;
  border-radius: ${responsiveSize(6)};
  transition: all 0.3s;

  ${props => props.active && `
    background: #00D563;
  `}
`

export const Icon = styled(IconCustom)`
  opacity: 0;

  transition: all 0.3s;

  ${props => props.active && `opacity: 1;`}
`