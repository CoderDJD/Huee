import React from "react";
import { Circle } from "react-feather";
import PropTypes, { InferProps } from "prop-types";

export default function NavigationUnit({
  routeStr,
  Icon,
}: InferProps<typeof NavigationUnit.propTypes>) {
  return (
    <div className="flex cursor-pointer">
      <a href={routeStr}>{Icon}</a>
    </div>
  );
}

NavigationUnit.propTypes = {
  routeStr: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
};

NavigationUnit.defaultProps = {
  routeStr: "/dash",
  Icon: Circle,
};
