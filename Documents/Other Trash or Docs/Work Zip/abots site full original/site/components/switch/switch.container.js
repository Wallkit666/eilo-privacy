import React, {useMemo} from 'react';

import SwitchView from "./switch.view"

import {findIndex} from "lodash"

const SwitchContainer = ({...props}) => {
  const activeIndex = useMemo(() => {
    return findIndex(props.options, { value: props.value })
  }, [props.options, props.value])

  return (
    <SwitchView {...props} activeIndex={activeIndex} />
  );
}

export default SwitchContainer;
