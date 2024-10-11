import styled from "styled-components";

import { Input as InputCustom, Button as ButtonCustom } from "@components";

import { FormCheckboxItem } from "@components/form/checkbox";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

export const Input = styled(InputCustom)`
  :not(:first-child) {
    margin-top: ${responsiveSize(24)};
  }

  @media (max-width: 767.98px) {
    :not(:first-child) {
      margin-top: ${responsiveSize(16)};
    }
  }

  ${(props) => props.textarea && `flex: 1;`}
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  :last-child {
    margin-left: ${responsiveSize(32)};
  }

  @media (max-width: 767.98px) {
    :last-child {
      margin-left: 0px;
      margin-top: ${responsiveSize(16)};
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Button = styled(ButtonCustom)`
  margin-left: auto;
  margin-top: ${responsiveSize(24)};

  @media (max-width: 991.98px) {
    margin-right: auto;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: ${responsiveSize(54)};

  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CheckboxItem = styled(FormCheckboxItem)`
  margin-right: ${responsiveSize(32)};
  margin-top: ${responsiveSize(24)};

  @media (max-width: 767.98px) {
    margin-top: ${responsiveSize(16)};
  }

  @media (max-width: 575.98px) {
    margin-right: 0px;
  }
`;
