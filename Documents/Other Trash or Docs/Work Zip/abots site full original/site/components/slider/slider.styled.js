import styled from "styled-components";

import { Icon } from "@components";

import { Splide as SplideCustom } from "@splidejs/react-splide";

import SectionsStrengthsCard from "./components/card";

import { responsiveSize } from "@utils/responsive";

export const Splide = styled(SplideCustom)`
  .splide__pagination {
    position: absolute;
    top: calc(100% + ${responsiveSize(34)});
    height: ${responsiveSize(32)};

    @media (max-width: 767.98px) {
      top: calc(100% + ${responsiveSize(30)});
    }

    &__page {
      width: ${responsiveSize(6)};
      height: ${responsiveSize(6)};
      margin: 0px ${responsiveSize(4)};

      border-radius: ${responsiveSize(100)};
      background-color: rgba(0, 213, 99, 0.2);

      &.is-active {
        width: ${responsiveSize(24)};
        transform: scale(1) !important;

        background-color: #00d563;
      }
    }
  }

  ${(props) =>
    !props.arrows &&
    `
    .splide__pagination, .splide__arrows {
      display: none;
    }
  `}
`;

export const Card = styled(SectionsStrengthsCard)`
  width: ${responsiveSize(1000)};

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${responsiveSize(800)};
  }

  @media (max-width: 767.98px) {
    width: ${responsiveSize(308)};
  }
`;

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
`;

export const Arrow = styled(Icon)`
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.type === "prev" &&
    `
    transform: rotate(180deg);
  `}

  @media (max-width: 767.98px) {
    width: ${responsiveSize(24)};
    height: ${responsiveSize(24)};
  }
`;
