import styled from 'styled-components';

import { Icon } from '@components'

import SectionsStrengthsCard from './components/card';

import { responsiveSize } from "@utils/responsive";

export const Card = styled(SectionsStrengthsCard)`
  width: ${responsiveSize(1000)};

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${responsiveSize(800)};
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(308)};
  }
`

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: calc(100% + ${responsiveSize(34)});
  width: ${responsiveSize(1000)};

  transform: translateX(-50%);

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${responsiveSize(800)};
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(308)};
  }
`

export const Arrow = styled(Icon)`
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  ${props => props.type === "prev" && `
    transform: rotate(180deg);
  `}

  @media (max-width: 767.98px) {
    width: ${responsiveSize(24)};
    height: ${responsiveSize(24)};
  }
`