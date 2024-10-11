import styled from "styled-components";

import { Button as ButtonCustom, Section as CustomSection } from "@components";

import { responsiveSize } from "@utils/responsive";

export const Section = styled(CustomSection)``;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  padding-top: ${responsiveSize(108)};

  /* padding-top: ${responsiveSize(108 + 100)}; */
  /* padding-bottom: ${responsiveSize(130)}; */
  /* min-height: 100vh; */

  @media (max-width: 991.98px) {
    flex-direction: column;
  }

  @media (max-width: 991.98px) {
    padding-top: ${responsiveSize(56)};
  }

  @media (max-width: 767.98px) {
    padding-top: ${responsiveSize(0)};
  }
`;

export const Preview = styled.div`
  height: ${responsiveSize(632)};

  border-radius: ${responsiveSize(16)};

  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;

  @media (min-width: 992px) {
    flex: 1.3;
  }

  @media (max-width: 991.98px) {
    height: ${responsiveSize(400)};
  }

  @media (max-width: 767.98px) {
    height: ${responsiveSize(343)};
  }
`;

export const Content = styled.div`
  margin: auto 0px auto ${responsiveSize(80)};

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 991.98px) {
    margin-left: 0px;
    margin-top: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(24)};
  }
`;

export const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: ${responsiveSize(67 * 3)};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-family: "Candal";
  font-weight: 400;
  font-size: ${responsiveSize(52)};
  line-height: ${responsiveSize(67)};

  color: #16252d;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(28)};
    line-height: ${responsiveSize(36)};
  }
`;

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: ${responsiveSize(24 * 10)};
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;

  margin-top: ${responsiveSize(40)};

  font-weight: 400;
  font-size: ${responsiveSize(15)};
  line-height: 150%;

  color: #16252d;

  @media (max-width: 991.98px) {
    margin-top: ${responsiveSize(24)};

    font-size: ${responsiveSize(14)};
  }
`;

export const Button = styled(ButtonCustom)`
  margin-right: auto;
  margin-top: ${responsiveSize(64)};

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(32)};
  }
`;
