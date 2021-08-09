import React from "react";
export default function SvgComponent(props: any) {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-5 prefix__w-5"
      viewBox="0 0 20 20"
      fill="#fd4f4f"
      {...props}>
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  );
}
