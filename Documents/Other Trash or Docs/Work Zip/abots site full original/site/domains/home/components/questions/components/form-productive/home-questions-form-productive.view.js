import React from "react";

import * as S from "./home-questions-form-productive.styled";

export default function HomeQuestionsFormProductiveView({ formik }) {
  return (
    <S.Container>
      <S.Content>
        <S.Column>
          <S.Input
            title="Name"
            placeholder="Enter your name"
            value={formik.values.name}
            isValid={!formik.touched.name || !formik.errors.name}
            onChange={(value) => formik.setFieldValue("name", value)}
          />

          <S.Input
            title="Phone"
            placeholder="Enter your number"
            value={formik.values.phone}
            isValid={!formik.touched.phone || !formik.errors.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
          />

          <S.Input
            title="Company URL"
            placeholder="Enter company URL"
            value={formik.values.company}
            isValid={!formik.touched.company || !formik.errors.company}
            onChange={(value) => formik.setFieldValue("company", value)}
          />
        </S.Column>

        <S.Column>
          <S.Input
            title="Budget"
            placeholder="Enter your budget"
            value={formik.values.budget}
            isValid={!formik.touched.budget || !formik.errors.budget}
            onChange={(value) => formik.setFieldValue("budget", value)}
          />

          <S.Input
            textarea
            title="Message"
            placeholder="Enter your message"
            value={formik.values.message}
            isValid={!formik.touched.message || !formik.errors.message}
            onChange={(value) => formik.setFieldValue("message", value)}
          />
        </S.Column>
      </S.Content>

      <S.Footer>
        <S.Checkbox>
          <S.CheckboxItem
            label="Data processing"
            active={formik.values.processing}
            onClick={() =>
              formik.setFieldValue("processing", !formik.values.processing)
            }
          />

          <S.CheckboxItem
            label="I need an NDA for the first communication"
            active={formik.values.nda}
            onClick={() => formik.setFieldValue("nda", !formik.values.nda)}
          />

          <S.CheckboxItem
            label="I have experience working with IT companies"
            active={formik.values.nda}
            onClick={() => formik.setFieldValue("nda", !formik.values.nda)}
          />
        </S.Checkbox>

        <S.Button size="big" title="Send" onClick={formik.handleSubmit} />
      </S.Footer>
    </S.Container>
  );
}
