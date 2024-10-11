import { useCallback } from 'react';

export default (router) => {
  const handleCloseModal = useCallback(() => {
    const query = { ...router.query }
    delete query.modal;

    router.push({
      pathname: window.location.pathname,
      query: query
    }, undefined, { scroll: false })
  }, [router.query, router.pathname])

  const handleOpenModal = useCallback((name) => {
    router.push({
      pathname: window.location.pathname,
      query: { ...router.query, modal: name }
    }, undefined, { scroll: false })
  }, [router.pathname, router.query])

  return { onCloseModal: handleCloseModal, onOpenModal: handleOpenModal }
}