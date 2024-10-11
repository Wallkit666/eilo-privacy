import styled from "styled-components";

import HomeSliderItemTechnologies from "./components/technologies";

import { Button as ButtonCustom } from "@components";
import { SectionTitle } from "@components/section";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  z-index: 2;

  @media (min-width: 992px) {
    min-height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${responsiveSize(108)};

  @media (min-width: 1200px) {
    flex: 1;
    padding-left: ${responsiveSize(136)};
    padding-right: ${responsiveSize(115)};
  }

  @media (max-width: 991.98px) {
    padding-top: ${responsiveSize(97)};
    flex-direction: column;
    /* justify-content: center; */
  }
`;

export const Title = styled(SectionTitle)`
  text-align: start;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  margin-top: ${responsiveSize(32)};

  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #16252d;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: ${responsiveSize(17)};
  }

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(16)};
  }

  @media (max-width: 565.98px) {
    margin-top: ${responsiveSize(24)};

    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(20)};
  }
`;

export const ButtonEstimate = styled(ButtonCustom)`
  margin-right: auto;
  margin-top: ${responsiveSize(24)};

  @media (max-width: 991.98px) {
    margin-left: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  max-width: ${responsiveSize(660)};
/*   
  @media (min-width: 992px) {
    max-width: ${responsiveSize(671)};
  }


  @media (max-width: 991.98px) {
    padding-top: ${responsiveSize(97)};
    flex-direction: column;
    /* justify-content: center; */
  } */
`;

export const Preview = styled.div`
  max-width: ${responsiveSize(617)};
  width: 100%;
  min-width: ${responsiveSize(350)};
  height: ${responsiveSize(686)};
  

  /* min-width: ${responsiveSize(380)}; */

  background: url("${(props) => props.image}") no-repeat center center;
  background-size: contain;

  /* background-color: green; */

  /* @media (min-width: 1199px) {
    margin-left: ${responsiveSize(42)};
  } */

  
  @media (min-width: 992px) {
    margin-left: ${responsiveSize(40)};
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    max-height: ${responsiveSize(300)};
    min-width: ${responsiveSize(200)};
    margin-top: ${responsiveSize(48)};
  }

  @media (max-width: 575.98px) {
    /* margin-top: ${responsiveSize(24)}; */
    height: ${responsiveSize(210)};
    margin-top: ${responsiveSize(20)};
    /* margin: auto 0px; */
  }
`;

export const Button = styled(ButtonCustom)`
  margin-right: auto;
  margin-top: ${responsiveSize(64)};

  @media (max-width: 1200px) {
    position: absolute;
    bottom: ${responsiveSize(84)};
    left: 50%;

    transform: translateX(-50%);
    /* margin-left: auto; */
  }
`;

export const Technologies = styled(HomeSliderItemTechnologies)`
  @media (max-width: 1200px) {
    display: none;
  }
`;
