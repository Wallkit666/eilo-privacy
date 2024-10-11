import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 105 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.954 11.869C14.172 8.383 33.42 6.503 41.106 5.324c7.686-1.18 23.65-1.075 33.496.179 9.846 1.254 21.486 5.286 29 8.099.746.264.639-3.96-.103-4.223-13.37-4.944-19.646-6.368-33.016-8.006-13.29-1.63-34.107.306-47.338 1.942A170.325 170.325 0 00.86 7.645c-.735.202-.64 4.425.102 4.224H.954z"
        fill="#00D563"
      />
    </svg>
  );
}

export default SvgComponent;
