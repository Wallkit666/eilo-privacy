import React, { useCallback, useState, useMemo } from 'react';

import HomeDoingView from "./home-doing.view"

import { useRouter } from 'next/router'

import useModal from "@hooks/useModal"

import { find } from "lodash"

const HomeDoingContainer = ({ ...props }) => {
  const router = useRouter();

  const [activeCountryId, setActiveCountryId] = useState(props.data[0]?.id)

  const { onOpenModal } = useModal(router)

  const activeCountry = useMemo(() => {
    return find(props.data, { id: activeCountryId })?.attributes
  }, [activeCountryId, props.data])

  const handleSelect = useCallback((id) => {
    setActiveCountryId(id)

    onOpenModal("progect")
  }, [onOpenModal])

  return (
    <HomeDoingView
      {...props}
      query={router?.asPath}
      modal={router?.query?.modal}
      activeCountry={activeCountry}
      onSelect={handleSelect}
      onOpenModal={onOpenModal}
    />
  );
}

export default HomeDoingContainer;
