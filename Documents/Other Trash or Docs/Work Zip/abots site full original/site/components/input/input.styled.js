import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  color: #16252D;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`

export const Star = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  color: #00D563;
`

export const Input = styled.input`
  padding: 0px ${responsiveSize(18)};
  height: ${responsiveSize(63)};

  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  background: #F5F5F6;
  border-radius: ${responsiveSize(6)};
  font-family: inherit;

  border: 1px solid transparent;
  transition: all 0.4s;

  width: 100%;

  ${props => props.isValid === false && 'border-color: #E03B4B;'}

  @media (max-width: 767.98px) {
    height: ${responsiveSize(50)};
    padding: 0px ${responsiveSize(14)};

    font-size: ${responsiveSize(14)};
  }
`

export const Textarea = styled.textarea`
  flex: 1;
  padding: ${responsiveSize(17)} ${responsiveSize(18)};
  height: ${responsiveSize(63)};

  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 160%;

  background: #F5F5F6;
  border-radius: ${responsiveSize(6)};
  font-family: inherit;
  outline: none;
  resize: none;

  width: 100%;

  border: 1px solid transparent;
  transition: all 0.4s;

  ${props => props.size === "big" && `
    height: ${responsiveSize(179)};
  `}

  ${props => props.isValid === false && 'border-color: #E03B4B;'}

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(14)};

    font-size: ${responsiveSize(14)};
  }
`