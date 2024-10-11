import React from 'react';

import SectionsQuestionsFormView from "./sections-questions-form.view"

import useContact from "@hooks/useContact"

const SectionsQuestionsFormContainer = ({ ...props }) => {
  const { formik } = useContact()

  return (
    <SectionsQuestionsFormView {...props} formik={formik} />
  );
}

export default SectionsQuestionsFormContainer;
