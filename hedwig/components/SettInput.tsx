import PropTypes, { InferProps } from "prop-types";
import React from "react";

export default function SettInput({
  text,
  callback,
}: InferProps<typeof SettInput.propTypes>) {
  return (
    <div className="flex flex-col space-y-1">
      <input
        className="bg-dark-300 focus:outline-none focus:ring focus:ring-accent-default focus:ring-opacity-75 rounded-sm p-2 text-white mt-1"
        placeholder={
          text.slice(0, 1).toLowerCase() + text.slice(1, text.length)
        }
        onChange={callback}></input>
    </div>
  );
}

SettInput.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

SettInput.defaultProps = {
  text: "Placeholder",
  callback: () => {},
};
