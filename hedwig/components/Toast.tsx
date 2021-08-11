import React from "react";
interface P {
  text: string;
}
export default function Toast({ text }: P) {
  return (
    <section className="bg-gray-800 hover:bg-gray-700 w-max pl-2 pr-2 text-accent-default rounded-md">
      <p className="small">{text}</p>
    </section>
  );
}
