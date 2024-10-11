import React from "react";

import ServiceСhatbotView from "./service-chatbot.view";

import { useRouter } from "next/router";

import useModal from "@hooks/useModal";

export default function ServiceСhatbotContainer({ ...props }) {
  const router = useRouter();

  const { onOpenModal } = useModal(router);

  return <ServiceСhatbotView {...props} onOpenModal={onOpenModal} />;
}
