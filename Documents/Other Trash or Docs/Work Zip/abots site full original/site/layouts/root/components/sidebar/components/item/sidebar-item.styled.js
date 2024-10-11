import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${responsiveSize(48)};
  padding: 0px ${responsiveSize(25)};
  flex-shrink: 0;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.6;
  }

  /* ${(props) => props.active && `background: #F1F6FC;`} */
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};

  color: #16252d;
`;
