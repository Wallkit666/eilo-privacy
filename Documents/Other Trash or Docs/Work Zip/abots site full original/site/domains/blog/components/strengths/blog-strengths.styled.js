import styled from "styled-components";

import { BlogCard } from "@components/blog";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div``;

export const Card = styled(BlogCard)`
  ${(props) =>
    props.type === "horizontal" &&
    `
    align-items: center;

    border: none;
    box-shadow: none;
    border-radius: 0px;

    :not(:last-child) {
      border-bottom: 1px solid #eaebec;
    }
  `}
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: ${responsiveSize(32)};
  grid-row-gap: ${responsiveSize(32)};

  @media (max-width: 1199.98px) {
    grid-template-columns: 1fr 1fr 1fr;

    grid-column-gap: ${responsiveSize(24)};
    grid-row-gap: ${responsiveSize(24)};
  }

  @media (min-width: 992px) {
    ${Card} {
      :nth-child(-n + 3) {
        display: none;
      }

      :nth-child(n + 19):nth-child(-n + 27) {
        display: none;
      }
    }
  }

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    ${Card} {
      :nth-child(9) {
        grid-column-start: 3;
        grid-column-end: 5;

        grid-row-start: 2;
        grid-row-end: 4;

        .preview {
          flex: 1;
        }

        p {
          p {
            max-height: ${responsiveSize(24 * 5)};
            -webkit-line-clamp: 5;
          }
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    ${Card} {
      :nth-child(9) {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${responsiveSize(32)};

  grid-column-start: 1;
  grid-column-end: 5;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: ${responsiveSize(32)};
  grid-column-gap: ${responsiveSize(32)};

  ${Card} {
    .preview {
      height: ${responsiveSize(320)};
    }

    p {
      max-height: ${responsiveSize(24 * 5)};
      -webkit-line-clamp: 5;
    }
  }

  @media (max-width: 991.98px) {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;

  :not(:last-child) {
    margin-bottom: ${responsiveSize(32)};
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  grid-column-start: 1;
  grid-column-end: 3;

  grid-row-start: 5;
  grid-row-end: 7;

  border: 1px solid #eaebec;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
  border-radius: ${responsiveSize(24)};

  overflow: hidden;

  @media (max-width: 991.98px) {
    display: none;
  }

  ${Card} {
    p {
      max-height: ${responsiveSize(24 * 2)};
      -webkit-line-clamp: 2;
    }
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  margin-right: ${responsiveSize(32)};

  display: flex;
  flex: 1;
  flex-direction: column;
`;
