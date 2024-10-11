import React from "react";

import ServiceWebView from "./service-web.view";

import { useRouter } from "next/router";

import useModal from "@hooks/useModal";

export default function ServiceWebContainer({ ...props }) {
  const router = useRouter();

  const { onOpenModal } = useModal(router);

  return <ServiceWebView {...props} onOpenModal={onOpenModal} />;
}
