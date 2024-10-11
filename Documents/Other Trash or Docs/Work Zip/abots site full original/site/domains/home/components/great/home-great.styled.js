import styled from "styled-components";

import HomeGreatCard from "./components/card";

import { responsiveSize } from "@utils/responsive";

export const Content = styled.div`
  margin-top: ${responsiveSize(90)};

  display: flex;
  flex-wrap: wrap;

  border: 1px solid #eaebec;
  background-color: #fff;

  @media (min-width: 576px) {
    box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);
    border-radius: ${responsiveSize(24)};
  }

  @media (max-width: 575.98px) {
    margin: 0px ${responsiveSize(-20)};

    border-left: none;
    border-right: none;
  }
`;

export const Card = styled(HomeGreatCard)`
  @media (min-width: 1200px) {
    width: calc(100% / 4);

    :not(:last-child) {
      border-right: 1px solid #eaebec;
    }
  }

  @media (min-width: 767px) and (max-width: 1199.98px) {
    width: calc(100% / 2);

    :nth-child(1),
    :nth-child(3) {
      border-right: 1px solid #eaebec;
    }

    :nth-child(1),
    :nth-child(2) {
      border-bottom: 1px solid #eaebec;
    }
  }

  @media (max-width: 575.98px) {
    :not(:last-child) {
      border-bottom: 1px solid #eaebec;
    }
  }
`;
