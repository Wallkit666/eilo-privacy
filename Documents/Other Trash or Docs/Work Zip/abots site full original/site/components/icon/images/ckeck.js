import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      d="m20.25 7.25-10.5 10.5L4.5 12.5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
