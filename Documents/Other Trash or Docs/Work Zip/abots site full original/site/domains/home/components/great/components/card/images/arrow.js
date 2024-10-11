import * as React from "react"

const SvgComponent = ({ title, titleId, ...props }) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    viewBox="0 0 18 18"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m4.5 13.5 9-9M6.188 4.5H13.5v7.313"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
