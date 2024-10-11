import styled from "styled-components";

import { BlogCard } from "@components/blog";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
`;

export const Card = styled(BlogCard)`
  flex-shrink: 0;
  width: ${responsiveSize(365)};
  height: 100%;

  

  /* p {
    max-height: ${responsiveSize(36 * 2)};
    -webkit-line-clamp: 2;
  } */
  /* width: calc((100% - ${responsiveSize(32 * 3)}) / 4); */

  /* :not(:last-child) {
    margin-right: ${responsiveSize(32)};
  } */

  /* Hug (270px) */

  @media (max-width: 767.98px) {
    width: ${responsiveSize(270)};

    .preview {
      height: ${responsiveSize(150)};
    }
  }
`;
