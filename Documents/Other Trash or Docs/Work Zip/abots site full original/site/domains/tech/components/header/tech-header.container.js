import React, { useMemo } from 'react';

import TechHeaderView from "./tech-header.view"

const TechHeaderContainer = ({ ...props }) => {
  const menuItems = useMemo(() => {
    return [
      {
        title: `What is ${props.data?.title}?`,
        to: "#info",
      },
      {
        title: 'Examples',
        to: "#examples",
      },
      {
        title: 'Benefits',
        to: "#benefits",
      },
      {
        title: 'Management',
        to: "#management",
      },
      {
        title: 'Our principles',
        to: "#principles",
      },
    ]
  }, [props.data?.title])

  return (
    <TechHeaderView {...props} menuItems={menuItems} />
  );
}

export default TechHeaderContainer;
