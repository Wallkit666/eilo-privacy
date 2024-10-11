import React, { useMemo } from 'react';

import ServicesStackItemView from "./services-stack-item.view"

const ServicesStackItemContainer = ({ ...props }) => {
  const tags = useMemo(() => {
    return props.data?.attributes?.Tags?.map(item => item?.title)?.join(", ")
  }, [props.data?.attributes?.Tags])

  return (
    <ServicesStackItemView {...props} tags={tags} />
  );
}

export default ServicesStackItemContainer;
