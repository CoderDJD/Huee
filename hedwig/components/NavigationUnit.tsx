import React from "react";
import { Circle } from "react-feather";
import PropTypes, { InferProps } from "prop-types";
import Link from "next/link";

export default function NavigationUnit({
  routeStr,
  Icon,
}: InferProps<typeof NavigationUnit.propTypes>) {
  return (
    <div className="flex cursor-pointer">
      <Link href={routeStr}>{Icon}</Link>
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
