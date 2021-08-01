import PropTypes, { InferProps } from "prop-types";
import React from "react";

export default function SettText({
  text,
  callback,
}: InferProps<typeof SettText.propTypes>) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-xs text-white font-body font-bold">{text}</label>
      <textarea
        className="bg-dark-300 focus:outline-none focus:ring focus:ring-accent-default focus:ring-opacity-75 rounded-sm p-2 text-white"
        placeholder={text}
        onChange={callback}></textarea>
    </div>
  );
}

SettText.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

SettText.defaultProps = {
  text: "Placeholder",
  callback: () => {},
};
