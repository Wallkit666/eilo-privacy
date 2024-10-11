import React from "react";

import { TextTexture, Section } from "@components";
import { SectionTitle } from "@components/section";

import HomeDoingProgectModal from "./components/project";

import { LoadScript, Marker } from "@react-google-maps/api";

import * as S from "./home-doing.styled";

import TextureSVG from "./images/texture";

import { mapStyles } from "./home-doing.style";

const center = {
  lat: 45,
  lng: -30,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  scaleControl: false,
  isInfoboxVisible: false,
  // control: false
};

export default function HomeDoingView({
  activeCountry,
  data,
  modal,
  onSelect,
}) {
  return (
    <Section
      theme="white"
      offsetTopSize="large"
      TitleComponent={
        <SectionTitle size="large">
          What are we doing{" "}
          <TextTexture width={155} height={12} IconComponent={TextureSVG}>
            now
          </TextTexture>
        </SectionTitle>
      }
      description="Click and find out more about what we are currently working on in the selected country"
    >
      <S.Container>
        <LoadScript googleMapsApiKey="AIzaSyAbt0ELV9QArC7RVklzsTkxTh23MfHrhS0">
          <S.Map center={center} zoom={3} options={options}>
            {data?.map((item) => (
              <Marker
                position={{
                  lat: item?.attributes?.lat,
                  lng: item?.attributes?.lng,
                }}
                icon="/images/point.svg"
                clickable={true}
                key={item?.id}
                onClick={() => onSelect(item?.id)}
              />
            ))}
          </S.Map>
        </LoadScript>
      </S.Container>

      <HomeDoingProgectModal
        isOpen={modal === "progect"}
        data={activeCountry}
      />
    </Section>
  );
}
