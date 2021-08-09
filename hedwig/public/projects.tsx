import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#f93973"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
      />
    </svg>
  );
}

export default SvgComponent;
