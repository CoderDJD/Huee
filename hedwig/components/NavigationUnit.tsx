import React from "react";
import { Circle } from "react-feather";
import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";

export default function NavigationUnit({
  routeStr,
  Icon,
}: InferProps<typeof NavigationUnit.propTypes>) {
  return (
    <div className="flex cursor-pointer">
      <Link href={routeStr}>
        <button className="focus:outline-none focus:ring">{Icon}</button>
      </Link>
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
