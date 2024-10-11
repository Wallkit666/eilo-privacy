import styled from 'styled-components';

import { Input as InputCustom, Button as ButtonCustom } from '@components'

import { FormCheckboxItem } from "@components/form/checkbox"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(56)};

  background-color: #fff;
  border-radius: ${responsiveSize(24)};
  box-shadow: 0px 0px ${responsiveSize(32)} rgba(0, 0, 0, 0.04);

  @media (max-width: 767.98px) {
    padding: ${responsiveSize(24)};
  }
`

export const Title = styled.h3`
  margin-bottom: ${responsiveSize(48)};

  font-weight: 600;
  text-align: center;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(32)};

  @media (max-width: 767.98px) {
    margin-bottom: ${responsiveSize(24)};
  }
`

export const Input = styled(InputCustom)`
  :not(:first-child) {
    margin-top: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    :not(:first-child) {
      margin-top: ${responsiveSize(16)};
    }
  }
`

export const Footer = styled.div`
  @media (min-width: 768px) {
    padding-top: ${responsiveSize(12)};
  }

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
  }
`

export const Button = styled(ButtonCustom)`
  margin-top: ${responsiveSize(48)};

  @media (max-width: 767.98px) {
    margin: ${responsiveSize(24)} auto 0px;
  }
`

export const CheckboxItem = styled(FormCheckboxItem)`
  margin-top: ${responsiveSize(16)};
`