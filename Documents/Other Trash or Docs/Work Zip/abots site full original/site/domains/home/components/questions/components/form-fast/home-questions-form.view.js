import React from 'react'

import * as S from './home-questions-form.styled'

export default function HomeQuestionsFormView({ formik }) {
  return (
    <S.Container>
      <S.Content>
        <S.Column>
          <S.Input 
            title='Name' 
            placeholder='Enter your name'
            value={formik.values.name}
            isValid={!formik.touched.name || !formik.errors.name}
            onChange={value => formik.setFieldValue('name', value)}
          />

          <S.Input 
            title='Phone'
            placeholder='Enter your number'
            mask="+99999999999999"
            maskChar=""
            value={formik.values.phone}
            isValid={!formik.touched.phone || !formik.errors.phone}
            onChange={value => formik.setFieldValue('phone', value)}
          />
        </S.Column>
        
        <S.Column>
          <S.Input 
            textarea
            title='Message'
            placeholder='Enter your message'
            value={formik.values.message}
            isValid={!formik.touched.message || !formik.errors.message}
            onChange={value => formik.setFieldValue('message', value)}
          />
        </S.Column>
      </S.Content>

      <S.Footer>
        <S.Checkbox>
          <S.CheckboxItem label="Data processing" active={formik.values.processing} onClick={() => formik.setFieldValue('processing', !formik.values.processing)} />

          <S.CheckboxItem label="I need an NDA for the first communication" active={formik.values.nda} onClick={() => formik.setFieldValue('nda', !formik.values.nda)} />
        </S.Checkbox>

        <S.Button size="big" title='Send' onClick={formik.handleSubmit}/>
      </S.Footer>
    </S.Container>
  )
}
