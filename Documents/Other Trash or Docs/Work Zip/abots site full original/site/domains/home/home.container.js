import React from "react";

import HomeView from "./home.view";

import { useRouter } from "next/router";

import useModal from "@hooks/useModal";

export default function HomeContainer({ ...props }) {
  const router = useRouter();

  const { onOpenModal } = useModal(router);

  return <HomeView {...props} onOpenModal={onOpenModal} />;
}
