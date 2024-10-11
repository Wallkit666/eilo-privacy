import React from "react";

import LayoutsRootHeader from "./components/header";
import LayoutsRootFooter from "./components/footer";
import LayoutsRootCopyright from "./components/copyright";
import LayoutsRootContactModal from "./components/contact-modal";

import * as S from "./layouts-root.styled";

const items = [
  {
    title: "Home",
    href: "/",
    pathname: "/",
  },
  {
    title: "Services",
    href: "/services",
    pathname: "/services",
  },
  {
    title: "About us",
    href: "/about",
    pathname: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
    pathname: "/blog",
  },
  {
    title: "Contacts",
    href: "/contacts",
    pathname: "/contacts",
  },
];

const serviceItems = [
  {
    title: "Strategy & Product Definition",
    href: "/services/strategy",
    pathname: "services/strategy",
  },
  {
    title: "Mobile development",
    href: "/services/mobile",
    pathname: "/services/mobile",
  },
  {
    title: "Web development",
    href: "/services/web",
    pathname: "/services/web",
  },
  {
    title: "Chat bot development",
    href: "/services/chat",
    pathname: "/services/chat",
  },
];

function LayoutaRootView({
  children,
  isFooter,
  modal,
  showSidebar,
  query,
  onChangeShowSidebar,
}) {
  return (
    <S.Container>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-246300194-1"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/ns.html?id=GTM-K8349SS"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4FEZFCDRTY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-246300194-1');
        `}
      </Script>

      <Script strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K8349SS');
        `}
      </Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-4FEZFCDRTY');
        `}
      </Script> */}

      <LayoutsRootHeader
        items={items}
        onOpenSidebar={() => onChangeShowSidebar(true)}
      />

      <S.Content>{children}</S.Content>

      {isFooter && (
        <>
          <LayoutsRootFooter />

          <LayoutsRootCopyright />
        </>
      )}

      <LayoutsRootContactModal isOpen={modal === "contacts"} />

      <S.Sidebar
        show={showSidebar}
        items={items}
        serviceItems={serviceItems}
        onClose={() => onChangeShowSidebar(false)}
      />
    </S.Container>
  );
}

LayoutaRootView.defaultProps = {
  isFooter: true,
};

export default LayoutaRootView;
