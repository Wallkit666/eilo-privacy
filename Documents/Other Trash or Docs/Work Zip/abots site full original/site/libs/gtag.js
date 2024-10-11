// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
// export const GA_TRACKING4_ID = process.env.NEXT_PUBLIC_GA4_ID

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url) => {
//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url,
//   })

//   window.gtag4('config', GA_TRACKING4_ID, {
//     page_path: url,
//   })
// }

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })

//   window.gtag4('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }

// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
// export const GA_TRACKING4_ID = process.env.NEXT_PUBLIC_GA4_ID

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url) => {
//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url,
//   })

//   window.gtag4('config', GA_TRACKING4_ID, {
//     page_path: url,
//   })
// }

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })

//   window.gtag4('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }

// export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID;
 
// export const pageview = () => {
//  window.gtag("config", GA_MEASUREMENT_ID, {
//   page_path: url,
//  });
// };
 
// export const event = ({ action, category, label, value }) => {
//  window.gtag("event", action, {
//   event_category: category,
//   event_label: label,
//   value,
//  });
// };


export const GA_TRACKING4_ID = process.env.NEXT_PUBLIC_GA4_ID;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })

  window.gtag('config', GA_TRACKING4_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}