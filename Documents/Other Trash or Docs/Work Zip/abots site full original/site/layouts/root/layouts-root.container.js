import React, { useState } from 'react';

import LayoutsRootView from "./layouts-root.view"

import { useRouter } from 'next/router'

const LayoutsRootContainer = ({ ...props }) => {
  const router = useRouter()

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <LayoutsRootView
      {...props}
      query={router?.asPath}
      modal={router?.query?.modal}
      showSidebar={showSidebar}
      onChangeShowSidebar={setShowSidebar}
    />
  );
}

export default LayoutsRootContainer;
