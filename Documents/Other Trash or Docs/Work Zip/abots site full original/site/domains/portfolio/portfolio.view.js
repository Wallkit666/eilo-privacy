import React from 'react';

import PortfolioDoing from './components/doing'
import PortfolioGallery from './components/gallery'

import * as S from "./portfolio.styled"

const PortfolioView = () => {
  return (
    <div>
      <PortfolioDoing/>

      <PortfolioGallery/>
    </div>
  );
}

export default PortfolioView;
