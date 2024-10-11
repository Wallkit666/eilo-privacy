import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 226 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.31 15.476a623.518 623.518 0 0186.866-9.222c28.907-1.003 57.874.026 86.901 3.085a598.02 598.02 0 0149.049 7.146c1.626.286 1.404-4.98-.213-5.267-29.143-5.4-58.29-8.735-87.441-10.008a616.605 616.605 0 00-86.75 2.307 631.197 631.197 0 00-48.609 6.692c-1.602.293-1.406 5.56.213 5.267H1.31z"
        fill="#61E268"
      />
    </svg>
  )
}

export default SvgComponent
