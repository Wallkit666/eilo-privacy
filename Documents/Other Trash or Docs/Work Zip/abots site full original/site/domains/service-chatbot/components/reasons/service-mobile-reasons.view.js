import React from 'react';

import { TextTexture } from "@components"

import SectionList from '@sections/list'

import TextureSVG from "./images/texture"

const ServiceMobileReasonsView = ({ data }) => {
  return (
    <SectionList data={data} title={<>TOP <TextTexture width={285} heiht={13} IconComponent={TextureSVG}>9 reasons</TextTexture> to create a chatbot for your business</>} />
  );
}

export default ServiceMobileReasonsView;
