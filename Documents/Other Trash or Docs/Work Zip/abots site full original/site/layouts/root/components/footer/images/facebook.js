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
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878V14.89H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.095 0 2.239.194 2.239.194v2.461h-1.261c-1.242 0-1.63.771-1.63 1.562V12h2.774l-.444 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
      stroke="#00D563"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
