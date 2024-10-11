import React from 'react';

import { SectionTitle } from "@components/section"

import * as S from "./service-header.styled"

import { API } from "@configs/api"

const ServiceHeaderView = ({ title, description, iconUrl, previewUrl, menuItems }) => {
  return (
    <S.Wrapper>
      <S.Section theme="transparent" isPaddingVertical={false} >
        <S.Container>
          <S.Content>
            <SectionTitle>{title}</SectionTitle>

            {!!previewUrl ? (
              <S.Preview image={`${API}${previewUrl}`} />
            ) : (
                <S.Icon image={`${API}${iconUrl}`} />
              )}

          </S.Content>
        </S.Container>
      </S.Section>

      <S.Menu items={menuItems} title={description} />
    </S.Wrapper>
  );
}

export default ServiceHeaderView;