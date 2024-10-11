import styled from 'styled-components';

import { GoogleMap } from '@react-google-maps/api';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  height: ${responsiveSize(615)};

  border-radius: ${responsiveSize(24)};

  overflow: hidden;

  @media (max-width: 767.98px) {
    margin-left: ${responsiveSize(-20)};
    margin-right: ${responsiveSize(-20)};
    height: ${responsiveSize(420)};
    
    border-radius: 0px;
  }

  .gmnoprint, .gm-fullscreen-control {
    display: none;
  }
`

export const Map = styled(GoogleMap).attrs({
  mapContainerStyle: {
    height: "100%",
    // filter: "grayscale(100%)"
  }
})`
  height: 100%;
`