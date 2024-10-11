import React, { useCallback } from 'react';

import LayoutsRootFooterView from "./layouts-root-footer.view"

import { useRouter } from 'next/router'

import useModal from "@hooks/useModal"

const LayoutsRootHeaderContainer = ({ ...props }) => {
  const router = useRouter()

  const { onOpenModal } = useModal(router)

  const handleSelect = useCallback((route, target) => {
    if (route) {
      target === "_blank" ? window.open(route, '_blank') : router.push(route)
    }
  }, [])

  return (
    <LayoutsRootFooterView {...props} onSelect={handleSelect} onOpenModal={onOpenModal} />
  );
}

export default LayoutsRootHeaderContainer;
