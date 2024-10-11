import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  transition: all 0.4s;

  height: 0px;

  overflow-y: hidden;

  ${props => props.show && `
    height: ${props.height}px;
  `}
/* 
  ${props => !props.show && `
    overflow-y: hidden;
  `} */
`

export const Content = styled.div`
  opacity: 0;
  transition: all 0.4s;

  ${props => props.show && `
    opacity: 1;
  `}
`