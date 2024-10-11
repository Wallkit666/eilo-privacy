import { useCallback } from "react";

import * as yup from "yup";

import { useFormik } from "formik";
import { useRouter } from "next/router";

import axios from "axios";

import { toast } from "react-toastify";

import "yup-phone";

yup.addMethod(yup.mixed, "requiredIfNoFast", function (
  from,
  message = "required"
) {
  const type = this.type;

  return this.test("requiredIfNoFast", message, function (val) {
    let isValid =
      (type === "array" ? val?.length > 0 : !!val) ||
      this.from[from].value?.schema === "fast";

    return isValid;
  });
});

const validationSchema = yup.object().shape({
  schema: yup.string().required(),
  name: yup.string().required(),
  // phone: yup.string().phone("IN").required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
  url: yup.string().requiredIfNoFast(0),
  budget: yup.string().requiredIfNoFast(0),
});

export default ({ schema = "fast" } = {}) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      schema,
      name: "",
      phone: "",
      email: "",
      message: "",
      url: "",
      budget: "",
      processing: false,
      experience: false,
      nda: false,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = useCallback((values) => {
    const notificationId = toast.loading("Please wait...");

    let text =
      values?.schema === "fast"
        ? `
Name: *${values?.name}*%0A
Phone: *${values?.phone}*%0A
Email: *${values?.email}*%0A
NDA: *${values?.nda ? "yes" : "no"}*%0A
Data processing: *${values?.processing ? "yes" : "no"}*%0A
%0A
Message:%0A
*${values?.message}*
`
        : `
Name: *${values?.name}*%0A
Phone: *${values?.phone}*%0A
Email: *${values?.email}*%0A
NDA: *${values?.nda ? "yes" : "no"}*%0A
Data processing: *${values?.processing ? "yes" : "no"}*%0A
Experience: *${values?.experience ? "yes" : "no"}*%0A

Message:%0A
*${values?.message}*%0A
-----------------%0A
Company URL: *${values?.url}*%0A
Budget: *${values?.budget} $*
`;
    axios
      .post(
        `https://api.telegram.org/bot5675527162:AAG6GjKvzYeIDt_m46nY10dfzx1JYkxZr38/sendMessage?chat_id=-1001835327432&text=${text}&parse_mode=Markdown`
      )
      .then((payload) => {
        console.log(payload);

        router.push("/thank");

        toast.update(notificationId, {
          render: "Source updated successfully",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.update(notificationId, {
          render: "Something went wrong, please try again!",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      });
  }, []);

  return { formik };
};
