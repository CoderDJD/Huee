import React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function Button({
  children,
  clickHandler,
}: InferProps<typeof Button.propTypes>) {
  return (
    <button
      className="flex gap-2 items-center text-md text-white font-bold font-body p-2 rounded-md bg-accent-default hover:bg-accent-hover focus:outline-none focus:ring w-max"
      onClick={clickHandler}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: <>Button</>,
  clickHandler: function () {
    console.log("You clicked a button!");
  },
};
