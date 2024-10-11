import styled from 'styled-components';

import { Switch as SwitchCustom } from '@components'

import HomeQuestionsInfo from './components/info'

import QuestionSVG from './images/question'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding: ${responsiveSize(80)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(24)};

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: ${responsiveSize(60)};
  }

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(32)};
  }
`

export const Header = styled.div`
  margin-bottom: ${responsiveSize(54)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991.98px) {
    flex-direction: column;

    margin-bottom: ${responsiveSize(24)};
  }
`

export const Questions = styled.div`
  display: flex;
  position: relative;


  @media (max-width: 991.98px) {
    margin-bottom: ${responsiveSize(24)};
  }
`

export const Icon = styled(QuestionSVG)`
  position: absolute;
  left: calc(100% - ${responsiveSize(5)});
  top: ${responsiveSize(-5)};
  
  width: ${responsiveSize(58)};
  height: ${responsiveSize(71)};

  @media (max-width: 991.98px) {
    width: ${responsiveSize(35)};
    height: 110%;
  }
  /* height: ${responsiveSize(71)}; */
`

export const Info = styled.div`
  margin-top: ${responsiveSize(28)};
  padding: 0px ${responsiveSize(40)};

  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 0px ${responsiveSize(20)};
  }

  @media (max-width: 767.98px) {
    padding: 0px ${responsiveSize(0)};
    margin-top: ${responsiveSize(24)};
    flex-direction: column;
    align-items: center;
  }
`

export const InfoItem = styled(HomeQuestionsInfo)`
  @media (max-width: 767.98px) {
    padding: 0px;
    flex-direction: column;
    align-items: center;

    padding: 0px ${responsiveSize(24)};

    :not(:last-child) {
      margin-bottom: ${responsiveSize(24)};
    }
  }
`

export const Switch = styled(SwitchCustom)`
  @media (max-width: 575.98px) {
    max-width: 100%;
  }
`