import React from "react";

import SectionStatisctics from "@sections/statistics";
import SectionManagement from "@sections/management";
import SectionPrinciples from "@sections/principles";
import SectionQuestions from "@sections/questions";

import ServiceStrategyHeader from "./components/header";
import ServiceStrategySpecification from "./components/specification";
import ServiceStrategyStages from "./components/stages";

import * as S from "./service-strategy.styled";

export default function ServiceStrategyView({
  principles,
  serviceStrategyPage,
}) {
  return (
    <S.Container>
      <ServiceStrategyHeader
        iconUrl={
          serviceStrategyPage?.service?.data?.attributes?.icon?.data?.attributes
            ?.url
        }
      />

      <div id="need">
        <ServiceStrategySpecification />
      </div>

      <div id="stages">
        <ServiceStrategyStages data={serviceStrategyPage?.stages} />
      </div>

      <div id="management">
        <SectionManagement />
      </div>

      <SectionStatisctics />

      <div id="principles">
        <SectionPrinciples data={principles} />
      </div>

      <SectionQuestions />
    </S.Container>
  );
}
