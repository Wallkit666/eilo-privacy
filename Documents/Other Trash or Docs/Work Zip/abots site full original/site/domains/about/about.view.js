import React from 'react';

import AboutHeader from './components/header'
import AboutAdvantages from './components/advantages'
import AboutExperts from './components/experts'
import SectionStrengths from '@sections/strengths'
import SectionProcesses from '@sections/processes'
import SectionQuestions from '@sections/questions'

const AboutView = ({ about }) => {
  return (
    <>
      <AboutHeader />

      <AboutAdvantages />

      <AboutExperts data={about?.experts?.data} />

      <SectionProcesses />

      <SectionStrengths data={about?.strengths?.data} />

      <SectionQuestions />
    </>
  );
}

export default AboutView;
