import { Circle } from "react-feather";
import PropTypes, { InferProps } from "prop-types";
import React from "react";

export default function ModalButton({
  Icon,
  Text,
  Route,
  onClick,
}: InferProps<typeof ModalButton.propTypes>) {
  return (
    <div
      className="flex space-x-2 bg-dark-300 rounded-sm p-2 items-center hover:shadow-lg hover:bg-dark-200"
      onClick={() => {
        onClick();
        window.location.replace(Route);
      }}>
      {Icon}
      <h3>{Text}</h3>
    </div>
  );
}

ModalButton.propTypes = {
  Icon: PropTypes.node,
  Text: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ModalButton.defaultProps = {
  Icon: <Circle />,
  Text: "Something",
  Route: "/",
  onClick: () => {},
};
