import React from "react";

import { FormPhone } from "@components/form";

import * as S from "./sections-questions-form-productive.styled";

export default function SectionsQuestionsFormProductiveView({ formik }) {
  return (
    <S.Container>
      <S.Content>
        <S.Column>
          <S.Input
            required
            title="Name"
            placeholder="Enter your name"
            value={formik.values.name}
            isValid={!formik.touched.name || !formik.errors.name}
            onChange={(value) => formik.setFieldValue("name", value)}
          />

          <S.Input
            as={FormPhone}
            value={formik.values.phone}
            isValid={!formik.touched.phone || !formik.errors.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
          />

          {/* <S.Input
            title="Phone"
            placeholder="Enter your number"
            // mask="+99999999999999"
            // maskChar=""
            value={formik.values.phone}
            isValid={!formik.touched.phone || !formik.errors.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
          /> */}

          <S.Input
            required
            title="Email"
            placeholder="Enter email"
            value={formik.values.email}
            isValid={!formik.touched.email || !formik.errors.email}
            onChange={(value) => formik.setFieldValue("email", value)}
          />

          <S.Input
            required
            title="Company URL"
            placeholder="Enter company URL"
            value={formik.values.url}
            isValid={!formik.touched.url || !formik.errors.url}
            onChange={(value) => formik.setFieldValue("url", value)}
          />
        </S.Column>

        <S.Column>
          <S.Input
            required
            textarea
            title="Message"
            placeholder="Enter your message"
            value={formik.values.message}
            isValid={!formik.touched.message || !formik.errors.message}
            onChange={(value) => formik.setFieldValue("message", value)}
          />

          <S.Input
            required
            title="Budget"
            placeholder="Enter your budget"
            value={formik.values.budget}
            isValid={!formik.touched.budget || !formik.errors.budget}
            onChange={(value) => formik.setFieldValue("budget", value)}
          />
        </S.Column>
      </S.Content>

      <S.Footer>
        <S.Checkbox>
          <S.CheckboxItem
            label="I have experience working with IT companies"
            active={formik.values.experience}
            onClick={() =>
              formik.setFieldValue("experience", !formik.values.experience)
            }
          />

          <S.CheckboxItem
            label="I need an NDA for the first communication"
            active={formik.values.nda}
            onClick={() => formik.setFieldValue("nda", !formik.values.nda)}
          />

          <S.CheckboxItem
            label="Data processing"
            active={formik.values.processing}
            onClick={() =>
              formik.setFieldValue("processing", !formik.values.processing)
            }
          />
        </S.Checkbox>

        <S.Button size="big" title="Send" onClick={formik.handleSubmit} />
      </S.Footer>
    </S.Container>
  );
}
