import React from 'react';

import HomeQuestionsFormView from "./home-questions-form.view"

import * as yup from 'yup';

import {useFormik} from 'formik';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
});

const HomeQuestionsFormContainer = ({...props}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
      processing: false,
      nda: false,
    },
    validationSchema,
    onSubmit: (values) => {
    },
  });

  return (
    <HomeQuestionsFormView {...props} formik={formik} />
  );
}

export default HomeQuestionsFormContainer;
