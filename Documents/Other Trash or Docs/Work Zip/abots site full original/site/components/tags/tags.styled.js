import styled from 'styled-components';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.div`
  padding: ${responsiveSize(8)} ${responsiveSize(16)};
  margin-bottom: ${responsiveSize(8)};

  background-color: rgba(217, 250, 236, 0.6);
  border-radius: ${responsiveSize(6)};

  :not(:last-child) {
    margin-right: ${responsiveSize(8)};
  }

  ${props => props.theme === 'dark' && `background-color: rgba(255, 255, 255, 0.12);`}
`

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(20)};

  color: #00D563;

  @media (max-width: 767.98px) {
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(17)};
  }
`
