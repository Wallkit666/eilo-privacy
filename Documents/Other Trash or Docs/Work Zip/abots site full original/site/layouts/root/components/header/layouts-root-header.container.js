import React, { useState, useCallback, useEffect } from 'react';

import LayoutsRootHeaderView from "./layouts-root-header.view"

import { useRouter } from 'next/router'

import useModal from "@hooks/useModal"

const LayoutsRootHeaderContainer = ({ ...props }) => {
  const router = useRouter()

  // alert(JSON.stringify(router.pathname))

  const { onOpenModal } = useModal(router)

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", progressBar, { passive: true });

    return () => {
      window.removeEventListener("scroll", progressBar, { passive: true });
    }
  }, [])

  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = scrollTotal / heightWin * 100;
    setScrollPosition(scroll)
  };

  const handleSelect = useCallback((route) => {
    router.push(router.pathname, route, { scroll: false })
  }, [])


  return (
    <LayoutsRootHeaderView {...props} router={router} scrollPosition={scrollPosition} pathname={router.pathname} onSelect={handleSelect} onOpenModal={onOpenModal} />
  );
}

export default LayoutsRootHeaderContainer;
