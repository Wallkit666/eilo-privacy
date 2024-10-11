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
      d="M8.672 11.7a7.837 7.837 0 0 0 3.656 3.647.749.749 0 0 0 .74-.056l2.345-1.566a.74.74 0 0 1 .712-.066l4.387 1.885a.74.74 0 0 1 .45.778A4.5 4.5 0 0 1 16.5 20.25 12.75 12.75 0 0 1 3.75 7.5a4.5 4.5 0 0 1 3.928-4.462.74.74 0 0 1 .778.45l1.885 4.397a.75.75 0 0 1-.057.703l-1.565 2.38a.75.75 0 0 0-.047.732v0Z"
      stroke="#00D563"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
