import styled from 'styled-components';

import { SectionTitle } from '@components/section'

import { responsiveSize } from "@utils/responsive";

export const Title = styled(SectionTitle)`
  max-width: ${responsiveSize(1014)};
`