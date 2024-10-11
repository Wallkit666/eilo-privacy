import styled from "styled-components";

import PhoneInput from "react-phone-input-2";

import { responsiveSize } from "@utils/responsive";

export const Input = styled(PhoneInput)`
  font-family: "Montserrat", sans-serif;

  .form-control {
    height: ${responsiveSize(63)};
    padding-left: 0px ${responsiveSize(18)} 0px ${responsiveSize(56)};
    /* padding: 0px ${responsiveSize(18)}; */

    font-weight: 500;
    font-size: ${responsiveSize(18)};
    line-height: 160%;
    color: #16252d;

    background: #f5f5f6;
    border-radius: ${responsiveSize(6)};
    font-family: inherit;

    border: none;
    transition: all 0.4s;

    width: 100%;

    ${(props) => props.isValid === false && "border-color: #E03B4B;"}

    @media (max-width: 767.98px) {
      height: ${responsiveSize(50)};
      padding-right: ${responsiveSize(14)};

      font-size: ${responsiveSize(14)};
    }
  }

  .selected-flag,
  .flag-dropdown {
    border-radius: ${responsiveSize(6)} 0px 0px ${responsiveSize(6)};
    border: none;
  }

  /* .al {
    background-position: ${responsiveSize(-96 * 1.5)} 0;
  } */

  .selected-flag {
    width: ${responsiveSize(50)};

    padding-left: ${responsiveSize(18)};

    @media (max-width: 767.98px) {
      padding-left: ${responsiveSize(14)};
    }

    /* .arrow {
      left: ${responsiveSize(20 * 1.5)};
    }

    .flag {
      width: ${responsiveSize(16 * 1.5)};
      height: ${responsiveSize(11 * 1.5)};
      background-size: ${responsiveSize(256 * 1.5)} ${responsiveSize(
      166 * 1.5
    )};
    } */
  }

  .selected-flag {
    transition: all 0.4s;

    :hover {
      background: transparent;

      opacity: 0.5;
    }
  }

  .flag-dropdown.open,
  .flag-dropdown.open .selected-flag {
    background: transparent;
  }

  .country-list {
    max-height: ${responsiveSize(315)};
    margin: ${responsiveSize(10)} 0px;

    box-shadow: 0px 0px 2rem rgb(0 0 0 / 8%);
    border-radius: 16px;

    .search {
      padding: 0px;
    }

    .country.highlight {
      display: none;
    }

    .search-box {
      margin-left: 0px;
      width: 100%;
      padding: ${responsiveSize(15)};

      font-size: ${responsiveSize(18)};
      line-height: ${responsiveSize(18)};
      color: #16252d;

      border-radius: 0px;
      border: none;
      border-bottom: 1px solid #f5f5f6;
    }

    .country {
      padding: ${responsiveSize(15)};
    }

    .country-name {
      color: #16252d;
    }

    /* color: #16252D; */
  }

  .search-emoji {
    display: none;
  }
`;
