import { Circle } from "react-feather";
import { useHistory } from "react-router-dom";
import PropTypes, { InferProps } from "prop-types";

export default function NavigationUnit({
  routeStr,
  Icon,
}: InferProps<typeof NavigationUnit.propTypes>) {
  const history = useHistory();
  return (
    <div className="flex cursor-pointer">
      <button
        className="focus:outline-none focus:ring"
        onClick={() => {
          history.push(routeStr.toString());
        }}>
        {Icon}
      </button>
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
