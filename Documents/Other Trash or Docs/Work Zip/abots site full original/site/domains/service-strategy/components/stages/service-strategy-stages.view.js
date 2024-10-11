import React from 'react';

import { TextTexture } from "@components"

import SectionList from '@sections/list'

import TextureSVG from "./images/texture"

const ServiceStrategyStagesView = ({ data }) => {
  return (
    <SectionList data={data} title={<>The <TextTexture width={344} height={17} IconComponent={TextureSVG}>main stages</TextTexture> of creating a strategy and product criteria</>} />
  );
}

export default ServiceStrategyStagesView;
