import React, { useCallback } from "react";

import HomeSuperpowerView from "./home-superpower.view";

import { useRouter } from "next/router";

export default function HomeSuperpowerContainer({ ...props }) {
  const router = useRouter();

  const handleGoToService = useCallback(
    (key) => {
      if (key) {
        router.push(`/services/${key}`);
      }
    },
    [router]
  );

  return <HomeSuperpowerView {...props} onGoToService={handleGoToService} />;
}
