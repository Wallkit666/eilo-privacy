import React from 'react';

import { TextTexture } from "@components"

import SectionList from '@sections/list'

import TextureSVG from "./images/texture"

const ServiceWebSolutionsView = ({ data }) => {
  return (
    <SectionList
      data={data}
      title={<>Why a <TextTexture width={211} height={17} IconComponent={TextureSVG}>custom</TextTexture> solution?</>}
      description="Uniqueness. Your business needs to stand out from the competition and increase sales conversions. Every day the number of your competitors is growing and the main fight for customers is on the digital battlefield."
    />
  );
}

export default ServiceWebSolutionsView;
