import { Circle } from "react-feather";
import PropTypes, { InferProps } from "prop-types";
import { useHistory } from "react-router";

export default function ModalButton({
  Icon,
  Text,
  Route,
}: InferProps<typeof ModalButton.propTypes>) {
  const history = useHistory();
  return (
    <div
      className="flex space-x-2 bg-dark-300 rounded-sm p-2 items-center hover:shadow-lg hover:bg-dark-200"
      onClick={() => {
        history.push(Route);
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
};

ModalButton.defaultProps = {
  Icon: <Circle />,
  Text: "Something",
  Route: "/",
};
