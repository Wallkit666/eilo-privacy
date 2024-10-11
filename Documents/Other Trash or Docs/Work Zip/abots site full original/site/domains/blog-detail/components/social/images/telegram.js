import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.4 1.082-2.405 12.552s-.336.87-1.26.453L6.186 9.682 6.16 9.67c.75-.697 6.56-6.107 6.814-6.352.393-.38.15-.606-.307-.319L4.085 8.642.773 7.49s-.52-.192-.57-.61C.15 6.461.79 6.235.79 6.235L14.29.751s1.11-.505 1.11.33Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
