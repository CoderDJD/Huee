import React from "react";
export default function Button({ children, color }: Props) {
  return (
    <article
      className={`bg-${
        color !== undefined ? color : "primary-100"
      } flex items-center rounded-md font-sans font-bold w-max p-2 space-x-3 cursor-pointer`}>
      {children}
    </article>
  );
}

interface Props {
  children: React.ReactNode;
  color?: string;
}
