import React from 'react';

import SectionServiceHeader from '@sections/service/header'

const menuItems = [{
  title: `Why you need this?`,
  to: "#need",
},
{
  title: 'Main stages',
  to: "#stages",
},
{
  title: 'Management',
  to: "#management",
},
{
  title: 'Our principles',
  to: "#principles",
}]

const ServiceMobileHeaderView = ({ iconUrl }) => {
  return (
    <SectionServiceHeader
      title="Strategy & Product Definition"
      description="Properly described specifications save up to 40% of the total budget"
      iconUrl={iconUrl}
      menuItems={menuItems}
    />
  );
}

export default ServiceMobileHeaderView;
