import React, { useCallback } from 'react';

import MenuView from "./menu.view"

import { animateScroll } from "react-scroll";

const MenuContainer = ({ ...props }) => {
  const handleSelect = useCallback(({ to }) => {
    if (to) {
      const section = document.querySelector(to);
      const topLine = document.getElementById("top-line");

      animateScroll.scrollTo(section.offsetTop - topLine.clientHeight);
    }
  }, [])

  return (
    <MenuView {...props} onSelect={handleSelect} />
  );
}

export default MenuContainer;
