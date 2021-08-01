import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Circle } from "react-feather";

export default function AuthButton({
  onClick,
  Icon,
  pStr,
}: InferProps<typeof AuthButton.propTypes>) {
  return (
    <button
      className="flex gap-2 items-center text-lg text-white font-body font-bold p-2 rounded-md bg-accent-default hover:bg-accent-hover focus:outline-none"
      onClick={onClick}>
      {Icon}
      Log in with {pStr}
    </button>
  );
}

AuthButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.node.isRequired,
  pStr: PropTypes.string.isRequired,
};

AuthButton.defaultProps = {
  onClick: () => {
    console.log("This is a special type of button, you clicked a AuthButton!");
  },
  Icon: <Circle />,
  pStr: "Hoot",
};
