import React from 'react';

import SectionServiceHeader from '@sections/service/header'

const menuItems = [{
  title: `Types of development`,
  to: "#types",
},
{
  title: 'Benefits',
  to: "#solutions",
},
{
  title: 'Additional services',
  to: "#services",
},
{
  title: 'Technologies',
  to: "#technologies",
},
{
  title: 'Management',
  to: "#management",
},
{
  title: 'Our principles',
  to: "#principles",
}]

const ServiceMobileHeaderView = ({ previewUrl }) => {
  return (
    <SectionServiceHeader
      title="Web development"
      description="The best tool to present and sell any product to a client"
      previewUrl={previewUrl}
      menuItems={menuItems}
    />
  );
}

export default ServiceMobileHeaderView;
