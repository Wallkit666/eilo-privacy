import React from "react";

import SectionStatisctics from "@sections/statistics";
import SectionManagement from "@sections/management";
import SectionPrinciples from "@sections/principles";
import SectionsTechnologies from "@sections/technologies";
import SectionQuestions from "@sections/questions";

import ServiceChatbotHeader from "./components/header";
import ServiceChatbotBots from "./components/bots";
import ServiceChatbotTypes from "./components/types";
import ServiceChhatbotReasons from "./components/reasons";

export default function ServiceChatbotView({
  principles,
  serviceChatbotPage,
  onOpenModal,
}) {
  return (
    <>
      <ServiceChatbotHeader
        iconUrl={
          serviceChatbotPage?.service?.data?.attributes?.icon?.data?.attributes
            ?.url
        }
      />

      <div id="bots">
        <ServiceChatbotBots data={serviceChatbotPage?.bots} />
      </div>

      <div id="reasons">
        <ServiceChhatbotReasons data={serviceChatbotPage?.reasons} />
      </div>

      <div id="types">
        <ServiceChatbotTypes
          data={serviceChatbotPage?.types}
          onOpenModal={onOpenModal}
        />
      </div>

      {!!serviceChatbotPage?.service?.data?.attributes?.technologies?.data
        ?.length && (
        <div id="technologies">
          <SectionsTechnologies
            data={
              serviceChatbotPage?.service?.data?.attributes?.technologies?.data
            }
            title="Chatbot technology"
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
