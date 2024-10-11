import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={10}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.325 10.292h2.978l.467-3.044H6.324V5.585c0-1.264.41-2.385 1.586-2.385H9.8V.544C9.466.499 8.764.4 7.44.4 4.67.4 3.045 1.87 3.045 5.224v2.024H.2v3.044h2.847v8.365c.564.085 1.135.143 1.721.143.53 0 1.047-.049 1.558-.118v-8.39Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
