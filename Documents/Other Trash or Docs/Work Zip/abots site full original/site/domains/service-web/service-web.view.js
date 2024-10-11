import React from "react";

import SectionStatisctics from "@sections/statistics";
import SectionManagement from "@sections/management";
import SectionPrinciples from "@sections/principles";
import SectionsTechnologies from "@sections/technologies";
import SectionQuestions from "@sections/questions";

import ServiceWebHeader from "./components/header";
import ServiceWebTypes from "./components/types";
import ServiceWebServices from "./components/services";
import ServiceWebSolutions from "./components/solutions";

export default function ServiceWebView({
  principles,
  serviceWebPage,
  onOpenModal,
}) {
  return (
    <>
      <ServiceWebHeader
        previewUrl={serviceWebPage?.preview?.data?.attributes?.url}
      />

      <div id="types">
        <ServiceWebTypes
          data={serviceWebPage?.types}
          onOpenModal={onOpenModal}
        />
      </div>

      <div id="solutions">
        <ServiceWebSolutions data={serviceWebPage?.solutions} />
      </div>

      <div id="services">
        <ServiceWebServices data={serviceWebPage?.services} />
      </div>

      {!!serviceWebPage?.service?.data?.attributes?.technologies?.data
        ?.length && (
        <div id="technologies">
          <SectionsTechnologies
            data={serviceWebPage?.service?.data?.attributes?.technologies?.data}
            title="Web technologies"
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
