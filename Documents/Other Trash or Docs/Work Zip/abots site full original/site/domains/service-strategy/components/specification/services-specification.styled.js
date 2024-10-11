import styled from 'styled-components';

// import { SectionTitle } from "@components/section"

import { responsiveSize } from "@utils/responsive";

import TextureLeftSVG from "./images/texture-left"
import TextureRightSVG from "./images/texture-right"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

// export const Title = styled(SectionTitle)`
//   margin-bottom: 100px;
// `

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 1200px) {
    padding: 0px ${responsiveSize(30)};
    margin-top: ${responsiveSize(36)};
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  position: relative;

  max-width: ${responsiveSize(558)};

  @media (min-width: 992px) {
    margin: 0px ${responsiveSize(40)};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    :first-child{
      margin-right: ${responsiveSize(40)};
    }
  }

  @media (max-width: 767.98px) {
    max-width: 100%;

    :not(:last-child) {
      margin-bottom: ${responsiveSize(24)};
    }
  }

  /* :first-child{
    margin-right: ${responsiveSize(144)};
  } */
`

export const Description = styled.p`
  margin: 0px auto;
  /* ${responsiveSize(108)} */

  font-weight: 500;
  font-size: ${responsiveSize(36)};
  line-height: ${responsiveSize(44)};

  text-align: center;

  color: #00D563;

  max-width: ${responsiveSize(1114)};

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(40)};

    font-size: ${responsiveSize(24)};
    line-height: ${responsiveSize(29)};
  }
`

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${responsiveSize(400)};
  width: 100%;
  margin: ${responsiveSize(24)} auto;

  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Arrow = styled.div`
  width: ${responsiveSize(40)};
  height: ${responsiveSize(40)};
`

export const TextureLeft = styled(TextureLeftSVG)`
  position: absolute;
  left: ${responsiveSize(-30)};
  top: ${responsiveSize(-30)};
  width: ${responsiveSize(42)};
  height: ${responsiveSize(48)};

  @media (max-width: 767.98px) {
    width: ${responsiveSize(27)};
    height: ${responsiveSize(28)};

    left: ${responsiveSize(-15)};
    top: ${responsiveSize(-20)};
  }
`

export const TextureRight = styled(TextureRightSVG)`
  position: absolute;
  right: ${responsiveSize(-50)};
  bottom: ${responsiveSize(-20)};
  width: ${responsiveSize(50)};
  height: ${responsiveSize(55)};

  @media (max-width: 767.98px) {
    width: ${responsiveSize(38)};
    height: ${responsiveSize(28)};

    right: ${responsiveSize(-30)};
    bottom: ${responsiveSize(-10)};
  }
`