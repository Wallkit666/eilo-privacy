import styled from 'styled-components';


import LayoutsRootSidebar from "./components/sidebar"

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
`

export const Sidebar = styled(LayoutsRootSidebar)`
  display: none;

  @media (max-width: 767.98px) {
    display: flex;
  }
`