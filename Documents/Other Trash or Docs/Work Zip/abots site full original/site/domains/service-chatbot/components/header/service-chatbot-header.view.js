import React from 'react';

import SectionServiceHeader from '@sections/service/header'

const menuItems = [
  {
    title: `Platforms`,
    to: "#bots",
  },
  {
    title: `Whe you need chatbot`,
    to: "#reasons",
  },
  {
    title: 'Types of chatbot',
    to: "#types",
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

const ServiceMobileHeaderView = ({ iconUrl }) => {
  return (
    <SectionServiceHeader
      title="Chat bot development"
      description="Automate the routine and reduce the time spent communicating with clients without losing quality"
      iconUrl={iconUrl}
      menuItems={menuItems}
    />
  );
}

export default ServiceMobileHeaderView;
