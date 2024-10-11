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
      d="M19.715 3.365 2.24 8.287a.75.75 0 0 0-.113 1.407l8.025 3.796a.731.731 0 0 1 .357.357l3.796 8.025a.75.75 0 0 0 1.407-.113l4.922-17.475a.74.74 0 0 0-.92-.919v0ZM10.396 13.603l4.238-4.237"
      stroke="#00D563"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
