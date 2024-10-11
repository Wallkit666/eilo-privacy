import styled from 'styled-components';

import { Address as AddressCustom } from "@components"

import SectionCustom, { SectionTitle, SectionDescription } from "@components/section"

import ContactsForm from "./components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding-top: ${responsiveSize(108)};
  background-color: #F5F5F6;
`

export const Section = styled(SectionCustom)`
  /* padding: ${responsiveSize(70)} 0px ${responsiveSize(168)}; */

  @media (min-width: 1350px) {
    padding-top: ${responsiveSize(70)};
  }
`

export const Body = styled.div`
  display: flex;

  @media (max-width: 1349.98px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
  /* padding: ${responsiveSize(126)} 0px ${responsiveSize(168)}; */

  @media (min-width: 1350px) {
    margin-right: 6.8vw;
    margin-top: ${responsiveSize(40)};
  }
`

export const Title = styled(SectionTitle)`
  margin-bottom: ${responsiveSize(32)};

  text-align: start;

  @media (max-width: 1349.98px) {
    margin-bottom: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    text-align: center;
  }
`

export const Description = styled(SectionDescription)`
  margin-bottom: ${responsiveSize(40)};

  text-align: start;

  @media (max-width: 767.98px) {
    text-align: center;
  }
`

export const Addresses = styled.div`
  display: flex;
  /* justify-content: space-between; */

  @media (max-width: 1349.98px) {
    margin-bottom: ${responsiveSize(40)};
    /* justify-content: space-around; */
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Address = styled(AddressCustom)`
  @media (min-width: 768px) {
    flex: 1;
    /* :not(:last-child) {
      margin-right: ${responsiveSize(40)};
    } */
  }
  
  @media (max-width: 767.98px) {
    :not(:last-child) {
      margin-bottom: ${responsiveSize(40)};
    }
  }
`

export const Form = styled(ContactsForm)`
  margin-bottom: ${responsiveSize(-110)};
  position: relative;
  
  z-index: 1;

  @media (min-width: 1350px) {
    flex: 0.52;
    max-width: ${responsiveSize(602)};
  }

  @media (max-width: 1349.98px) {
    margin-bottom: ${responsiveSize(-72)};
  }
`