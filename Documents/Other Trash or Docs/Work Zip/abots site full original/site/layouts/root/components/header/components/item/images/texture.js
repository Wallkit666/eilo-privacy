import * as React from "react"

import { responsiveSize } from "@utils/responsive";

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 74 4"
    {...props}
  >
    <path
      d="M.76 3.999A739.737 739.737 0 0 1 57.24 2.65c5.33.074 10.655.209 15.975.405.209 0 .408-.136.555-.377.147-.242.23-.57.23-.91 0-.342-.083-.67-.23-.911-.147-.241-.346-.377-.555-.377a739.418 739.418 0 0 0-56.48.123 612.36 612.36 0 0 0-15.976.821C-.249 1.485-.257 4.06.76 4Z"
      fill="#61E268"
    />
  </svg>
)

export default SvgComponent
