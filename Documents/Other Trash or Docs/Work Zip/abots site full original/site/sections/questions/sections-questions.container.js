import React, { useState } from 'react';

import SectionsQuestionsView from "./sections-questions.view"

const SectionsQuestionsContainer = ({ ...props }) => {
  const [type, setType] = useState("fast")

  return (
    <SectionsQuestionsView {...props} type={type} onChangeType={setType} />
  );
}

export default SectionsQuestionsContainer;
