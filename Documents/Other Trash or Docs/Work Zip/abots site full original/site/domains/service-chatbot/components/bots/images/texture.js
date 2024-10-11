import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 242 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.476 11.413C32 8 71 6.5 93.5 5.5 124.204 4.905 161 6.87 183 8.5s38.643 3.514 55.967 6.65c2.532.457 4.032-3.65-.123-5.02-30.829-5.505-52.426-6.555-83.343-8.13C124.769.431 81.001.5 60.001 2S19.5 4.5 2.37 6.394C-1.499 8 0 12 2.494 11.412h-.018z"
        fill="#61E268"
      />
    </svg>
  )
}

export default SvgComponent
