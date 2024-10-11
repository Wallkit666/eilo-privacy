import React from 'react'

import ModalView from "./modal.view"

import { useRouter } from 'next/router'

import useModal from "@hooks/useModal"

export default function ModalContainer({ ...props }) {
  const router = useRouter(useRouter)

  const { onCloseModal } = useModal(router)

  return (
    <ModalView {...props} onClose={onCloseModal} />
  )
}
