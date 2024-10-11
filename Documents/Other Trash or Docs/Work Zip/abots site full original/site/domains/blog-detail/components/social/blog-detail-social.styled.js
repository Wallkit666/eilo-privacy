import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  margin-left: auto;
  margin-bottom: ${responsiveSize(8)};

  display: flex;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const Icon = styled.div`
  :not(:last-child) {
    margin-right: ${responsiveSize(12)};
  }
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(32)};
  height: ${responsiveSize(32)};

  background: #00d563;
  border-radius: 2px;
`;
