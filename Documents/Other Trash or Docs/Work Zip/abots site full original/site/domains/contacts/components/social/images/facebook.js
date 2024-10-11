import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    {...props}
  >
    <path
      d="M40.33 22c0-10.125-8.207-18.333-18.333-18.333C11.872 3.667 3.664 11.875 3.664 22c0 9.15 6.704 16.735 15.469 18.11V27.3h-4.655V22h4.655v-4.04c0-4.594 2.737-7.132 6.925-7.132 2.005 0 4.104.358 4.104.358v4.512H27.85c-2.278 0-2.988 1.413-2.988 2.863V22h5.085l-.813 5.3h-4.272v12.81c8.765-1.375 15.469-8.96 15.469-18.11Z"
      stroke="#fff"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
