import React from "react";

import ContactsSocial from "./components/social";

import * as S from "./contacts.styled";

const addresses = [
  {
    title: "USA",
    data: {
      email: {
        title: "info@a-bots.com",
        link: "mailto:info@a-bots.com",
      },
      phone: {
        title: "17208230734",
        link: "tel:+17208230734",
      },
      telegram: {
        title: "@Alphabots_support",
        link: "https://t.me/Alphabots_support",
      },
    },
  },
  {
    title: "Kyiv, Ukraine",
    data: {
      email: {
        title: "info@a-bots.com",
        link: "mailto:info@a-bots.com",
      },
      phone: {
        title: "+38 063 207 53 72",
        link: "tel:+380632075372",
      },
      telegram: {
        title: "@Alphabots_support",
        link: "https://t.me/Alphabots_support",
      },
    },
  },
];

const ContactsView = ({ formik }) => {
  return (
    <S.Container>
      <S.Section isPaddingVertical={false}>
        <S.Body>
          <S.Content>
            <S.Title>
              We speak the same language with you - the language of business!
            </S.Title>

            <S.Description>
              We respect your time and treat every minute spent on us with great
              respect! At the first call, we will get to know you and discuss
              the idea of your project - then we will arrange a second call with
              specialists in similar projects and we will be able to dive into
              the details.
            </S.Description>

            <S.Addresses>
              {addresses?.map((item, index) => (
                <S.Address title={item.title} data={item?.data} key={index} />
              ))}
            </S.Addresses>
          </S.Content>

          <S.Form formik={formik} />
        </S.Body>
      </S.Section>

      <ContactsSocial />
    </S.Container>
  );
};

export default ContactsView;
