import React, { useState } from 'react';

import HomeDoingProjectCollapseView from "./home-doing-project-collapse.view"

const HomeDoingProjectCollapseContainer = ({ initialActive, ...props }) => {
  const [active, setActive] = useState(initialActive)


  return (
    <HomeDoingProjectCollapseView {...props} active={active} onChangeActive={setActive} />
  );
}

export default HomeDoingProjectCollapseContainer;
