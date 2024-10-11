import styled from "styled-components";

import BlogDetailSocial from "./components/social";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div``;

export const Social = styled(BlogDetailSocial)`
  margin-bottom: ${responsiveSize(12)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #16252d;
  }

  h1 {
    margin-bottom: ${responsiveSize(48)};

    font-weight: 600;
    font-size: ${responsiveSize(48)};
    line-height: ${responsiveSize(59)};
  }

  /* h1 + p {
    margin-top: ${responsiveSize(48)};
  } */

  h2 {
    margin-top: ${responsiveSize(32)};
    margin-bottom: ${responsiveSize(20)};

    font-weight: 600;
    font-size: ${responsiveSize(36)};
    line-height: ${responsiveSize(48)};

    /* :not(:first-child) */
  }

  h3 {
    margin-bottom: ${responsiveSize(16)};
    margin-top: ${responsiveSize(16)};

    font-weight: 600;
    font-size: ${responsiveSize(24)};
    line-height: ${responsiveSize(32)};
  }

  

  img {
    max-width: 100%;
    max-height: ${responsiveSize(500)};
    border-radius: ${responsiveSize(16)};
  }

  li {
    :not(:last-child) {
      margin-bottom: ${responsiveSize(16)};
    }
  }

  p {
    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(24)};
    color: #343a40;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(16)};
    }
  }

  p > img {
    display: flex;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
  }

  p {
    & + p:has(> img) {
      margin-top: ${responsiveSize(32)};
    }
  }

  h2 + h3 {
    margin-top: ${responsiveSize(12)};
  }

  p:has(> img) {
    & + h2, & + h3 {
      margin-top: 0px
    }
  }

  @media (max-width: 767.98px) {
    h1 {
      margin-bottom: ${responsiveSize(32)};

      font-size: ${responsiveSize(24)};
      line-height: ${responsiveSize(29)};
    }

    p > img {
      margin-bottom:16px;
    }

    h2 {
      margin-top: ${responsiveSize(16)};

      font-weight: 600;
      font-size: ${responsiveSize(24)};
      line-height: ${responsiveSize(32)};
    }

    h3 {
      margin-top: 0px;

      font-size: ${responsiveSize(18)};
      line-height: ${responsiveSize(24)};
    }
  }
`;

// ${responsiveSize(1000)}
