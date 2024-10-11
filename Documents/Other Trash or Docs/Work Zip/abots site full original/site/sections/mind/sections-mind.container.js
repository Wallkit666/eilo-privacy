import React from "react";

import SectionsMindView from "./sections-mind.view";

import { useRouter } from "next/router";

import useModal from "@hooks/useModal";

const SectionsMindContainer = ({ ...props }) => {
  const router = useRouter();

  const { onOpenModal } = useModal(router);

  return <SectionsMindView {...props} onOpenModal={onOpenModal} />;
};

export default SectionsMindContainer;
