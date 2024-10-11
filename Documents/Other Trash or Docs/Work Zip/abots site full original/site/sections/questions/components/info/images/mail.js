import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m21 5.25-9 8.25-9-8.25"
      stroke="#00D563"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 5.25h18V18a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 18V5.25ZM10.36 12l-7.126 6.534M20.766 18.534 13.64 12"
      stroke="#00D563"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
