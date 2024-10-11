import React from 'react';

import SectionServiceHeader from '@sections/service/header'

const menuItems = [
  {
    title: 'Types of mobile apps',
    to: "#types",
  },
  {
    title: `Why you need application`,
    to: "#reasons",
  },
  {
    title: 'Applications difference',
    to: "#advantages",
  },

  {
    title: 'Management',
    to: "#management",
  },
  {
    title: 'Our principles',
    to: "#principles",
  }
]

const ServiceMobileHeaderView = ({ previewUrl }) => {
  return (
    <SectionServiceHeader
      title="Mobile development"
      description="From discussing an idea to a comprehensive solution"
      previewUrl={previewUrl}
      menuItems={menuItems}
    />
  );
}

export default ServiceMobileHeaderView;
