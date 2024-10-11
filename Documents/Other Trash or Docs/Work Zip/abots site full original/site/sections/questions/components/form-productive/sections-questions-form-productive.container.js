import React from 'react';

import SectionsQuestionsFormProductiveView from "./sections-questions-form-productive.view"

import useContact from "@hooks/useContact"

const SectionsQuestionsFormProductiveContainer = ({ ...props }) => {
  const { formik } = useContact({ schema: "productive" })

  return (
    <SectionsQuestionsFormProductiveView {...props} formik={formik} />
  );
}

export default SectionsQuestionsFormProductiveContainer;
