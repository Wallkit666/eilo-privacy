import React from "react";

import { Icon, Address } from "@components";

import Item from "./components/item";

import * as S from "./layouts-root-sidebar.styled";

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

export default function LayoutsRootSidebarView({
  className,
  items,
  serviceItems,
  show,
  pathname,
  onClose,
}) {
  return (
    <>
      <S.Container show={show} className={className}>
        <S.Close onClick={onClose}>
          <Icon name="close" size={24} />
        </S.Close>

        {items?.map((item, index) => (
          <Item
            data={item}
            active={pathname === item?.pathname}
            key={index}
            onSelect={onClose}
          />
        ))}

        <S.Hr />

        {serviceItems?.map((item, index) => (
          <Item
            data={item}
            active={pathname === item?.pathname}
            key={index}
            onSelect={onClose}
          />
        ))}

        <S.Hr />

        {addresses?.map((item, index) => (
          <S.Address title={item.title} data={item?.data} key={index} />
        ))}
      </S.Container>

      <S.Overflow show={show} onClick={onClose} />
    </>
  );
}
