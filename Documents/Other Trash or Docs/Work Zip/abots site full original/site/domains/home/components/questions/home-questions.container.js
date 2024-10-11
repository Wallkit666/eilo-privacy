import React, { useState } from 'react';

import HomeQuestionsView from "./home-questions.view"

const HomeQuestionsContainer = ({...props}) => {
  const [type, setType] = useState("fast")

  return (
    <HomeQuestionsView {...props} type={type} onChangeType={setType} />
  );
}

export default HomeQuestionsContainer;
