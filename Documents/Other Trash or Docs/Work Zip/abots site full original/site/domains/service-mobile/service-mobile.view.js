import React from "react";

import SectionStatisctics from "@sections/statistics";
import SectionManagement from "@sections/management";
import SectionPrinciples from "@sections/principles";
import SectionsTechnologies from "@sections/technologies";
import SectionQuestions from "@sections/questions";

import ServiceMobileHeader from "./components/header";
import ServiceMobileApplications from "./components/applications";
import ServiceMobileReasons from "./components/reasons";
import ServiceMobileApproaches from "./components/approaches";

export default function ServiceMobileView({
  principles,
  serviceMobilePage,
  onOpenModal,
}) {
  return (
    <>
      <ServiceMobileHeader
        previewUrl={serviceMobilePage?.preview?.data?.attributes?.url}
      />

      <div id="types">
        <ServiceMobileApplications
          data={serviceMobilePage?.applications}
          onOpenModal={onOpenModal}
        />
      </div>

      <div id="reasons">
        <ServiceMobileReasons data={serviceMobilePage.reasons} />
      </div>

      <div id="advantages">
        <ServiceMobileApproaches
          data={serviceMobilePage.approaches}
          onOpenModal={onOpenModal}
        />
      </div>

      {!!serviceMobilePage?.service?.data?.attributes?.technologies?.data
        ?.length && (
        <div id="technologies">
          <SectionsTechnologies
            data={
              serviceMobilePage?.service?.data?.attributes?.technologies?.data
            }
            title="Mobile technologies"
          />
        </div>
      )}

      <div id="management">
        <SectionManagement />
      </div>

      <SectionStatisctics />

      <div id="principles">
        <SectionPrinciples data={principles} />
      </div>

      <SectionQuestions />
    </>
  );
}
