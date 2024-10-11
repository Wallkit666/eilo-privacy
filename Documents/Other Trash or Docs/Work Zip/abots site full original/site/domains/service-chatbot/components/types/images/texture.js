import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 243 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.303 11.3c29.523-3.414 68.523-4.914 91.023-5.914 30.704-.595 67.501 1.37 89.501 3 22 1.631 38.643 3.514 55.967 6.65 2.532.458 4.032-3.65-.123-5.019-30.829-5.505-52.426-6.555-83.343-8.13-30.733-1.57-74.501-1.5-95.501 0s-40.5 2.5-57.63 4.394c-3.87 1.605-2.37 5.605.123 5.018h-.017z"
        fill="#61E268"
      />
    </svg>
  )
}

export default SvgComponent
