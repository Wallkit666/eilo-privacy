import React from 'react';

import ContactsFormView from "./contacts-form.view"

import useContact from "@hooks/useContact"

const ContactsFormContainer = ({ ...props }) => {
  const { formik } = useContact()

  return (
    <ContactsFormView {...props} formik={formik} />
  );
}

export default ContactsFormContainer;
