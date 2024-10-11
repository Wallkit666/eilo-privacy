import "../styles/globals.scss";

import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

// import Script from "next/script";

// import { GoogleAnalytics } from "nextjs-google-analytics";

import { GoogleTagManager } from "@components";

import * as gtag from "../libs/gtag";
// import * as gtm from '../libs/gtm'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-phone-input-2/lib/style.css";

import "@splidejs/react-splide/css";
// import '@splidejs/splide/dist/css/splide.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     // gtag.pageview(url)
  //     gtm.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  // useEffect(() => {
  //   router.events.on('routeChangeComplete', gtm.pageview)
  //   return () => {
  //     router.events.off('routeChangeComplete', gtm.pageview)
  //   }
  // }, [router.events])

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Mobile App Development | Chat Bots Development | A-bots</title>

        <meta charSet="utf-8" />
        <meta name="msvalidate.01" content="8F102125C7FBFE7C695F0150578F07B2" />
        <meta
          name="description"
          content="Explore the cutting-edge world of mobile app development and chat bot
          solutions with our expert team. Elevate your business presence and
          user engagement through innovative mobile applications tailored to
          your needs. Harness the power of artificial intelligence with our chat
          bot development services, creating intelligent and interactive
          solutions that redefine the way you connect with your audience."
        />
        <meta
          property="og:title"
          content="Mobile App Development | Chat Bots Development | A-bots"
        />
        <meta
          property="og:description"
          content="Explore the cutting-edge world of mobile app development and chat bot
          solutions with our expert team. Elevate your business presence and
          user engagement through innovative mobile applications tailored to
          your needs. Harness the power of artificial intelligence with our chat
          bot development services, creating intelligent and interactive
          solutions that redefine the way you connect with your audience."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>

      {/* Google Tag Manager - Global base code */}
      {/* <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtm.GTM_ID}');
          `,
        }}
      /> */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${gtag.GA_TRACKING4_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}

      {/* <GoogleAnalytics trackPageViews /> */}
      <GoogleTagManager>
        <Component {...pageProps} />
      </GoogleTagManager>

      <ToastContainer />
    </>
  );
}

export default MyApp;
