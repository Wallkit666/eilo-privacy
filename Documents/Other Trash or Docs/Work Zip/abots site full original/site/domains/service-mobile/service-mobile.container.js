import React from "react";

import ServiceMobileView from "./service-mobile.view";

import { useRouter } from "next/router";

import useModal from "@hooks/useModal";

export default function ServiceMobileContainer({ ...props }) {
  const router = useRouter();

  const { onOpenModal } = useModal(router);

  return <ServiceMobileView {...props} onOpenModal={onOpenModal} />;
}
