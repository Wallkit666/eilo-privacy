import React from 'react'

import { Modal } from "@components"

import { SectionsQuestionFormFast } from "@sections/questions"

import * as S from './layouts-root-contact-modal.styled'

export default function LayoutsRootContactModalView({ isOpen, onCloseModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Contact us</S.Title>

        <SectionsQuestionFormFast />
      </S.Container>
    </Modal>
  )
}
