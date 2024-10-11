import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(54)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border: 1px solid #EAEBEC;
  /* box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04); */
  border-radius: 24px;

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(32)};
  }
`;

export const Title = styled.p`
  margin-bottom: ${responsiveSize(54)};

  font-weight: 500;
  font-size: ${responsiveSize(32)};
  line-height: ${responsiveSize(39)};
  text-align: center;
  color: #16252d;

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};

    font-size: ${responsiveSize(20)};
    line-height: ${responsiveSize(24)};
  }

  ${(props) =>
    props.isKey &&
    `
    cursor: pointer;
    transition: all 0.4s;

    :hover {
      opacity: 0.5;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  cursor: pointer;
  transition: all 0.4s;

  :not(:last-child) {
    margin-right: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    flex: 1;
  }

  :hover {
    opacity: 0.8;
    transform: scale(0.9);
  }

  @media (max-width: 991.98px) {
    :not(:last-child) {
      margin-right: ${responsiveSize(15)};
    }
  }

  @media (max-width: 767.98px) {
    :not(:last-child) {
      width: ${responsiveSize(54)};
    }
  }
`;

export const Icon = styled.div`
  margin-bottom: ${responsiveSize(16)};

  width: ${responsiveSize(80)};
  height: ${responsiveSize(80)};

  border: 1px solid #F5F5F6;
  border-radius: ${responsiveSize(16)};
  background: url("${(props) => props.image}") no-repeat center center;
  background-size: cover;

  @media (max-width: 767.98px) {
    width: ${responsiveSize(40)};
    height: ${responsiveSize(40)};
    margin-bottom: ${responsiveSize(8)};

    border-radius: ${responsiveSize(6)};
  }
`;

export const Label = styled.span`
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  text-align: center;
  color: #6c757d;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
  }
`;
