import styled from 'styled-components';

import { Icon as CustomIcon } from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(0.95);
    opacity: 0.5;
  }

  ${props => props.type === "right" && `
    flex-direction: row-reverse;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.type === "left" && `
    margin-left: ${responsiveSize(24)};
  `}

  ${props => props.type === "right" && `
    margin-right: ${responsiveSize(24)};
    align-items: flex-end;
  `}

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Description = styled.span`
  margin-bottom: ${responsiveSize(8)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};
  color: #6C757D;
`

export const Title = styled.span`
  font-weight: 700;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};
  color: #6C757D;
`

export const Icon = styled(CustomIcon)`
  ${props => props.type === "left" && `
    transform: rotate(-180deg);
  `}

  ${props => props.type === "right" && `
    transform: rotate(180deg);
  `}

  @media (max-width: 767.98px) {
    width: ${responsiveSize(20)};
    height: ${responsiveSize(20)};
  }
`