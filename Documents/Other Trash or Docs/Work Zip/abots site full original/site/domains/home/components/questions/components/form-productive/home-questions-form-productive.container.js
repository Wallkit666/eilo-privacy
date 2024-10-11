import React from 'react';

import HomeQuestionsFormProductiveView from "./home-questions-form-productive.view"

import * as yup from 'yup';

import {useFormik} from 'formik';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  company: yup.string().required(),
  budget: yup.string().required(),
  message: yup.string().required(),
});

const HomeQuestionsFormProductiveContainer = ({...props}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
    },
  });

  return (
    <HomeQuestionsFormProductiveView {...props} formik={formik} />
  );
}

export default HomeQuestionsFormProductiveContainer;
