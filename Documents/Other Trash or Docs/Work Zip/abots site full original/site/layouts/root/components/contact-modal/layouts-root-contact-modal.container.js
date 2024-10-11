import React from 'react';

import LayoutsRootContactModalView from "./layouts-root-contact-modal.view"

import { useRouter } from 'next/router'

import useModal from "@hooks/useModal"

const LayoutsRootContactModalContainer = ({ ...props }) => {
  const router = useRouter()

  const { onCloseModal } = useModal(router)

  return (
    <LayoutsRootContactModalView {...props} onCloseModal={onCloseModal} />
  );
}

export default LayoutsRootContactModalContainer;
