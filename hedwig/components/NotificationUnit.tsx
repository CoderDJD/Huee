import {
  GitHub,
  Twitter,
  Coffee,
  MessageSquare,
  BarChart2,
} from "react-feather";
import PropTypes, { InferProps } from "prop-types";

export default function NotificationUnit({
  plat,
  project,
  content,
}: InferProps<typeof NotificationUnit.propTypes>) {
  return (
    <div className="flex flex-col w-full p-2 rounded-sm bg-dark-500 shadow-md border-dark-300 hover:bg-dark-300">
      <article className="flex gap-1 items-center">
        <h4>{project}</h4>
        {plat === "gh" ? (
          <GitHub className="w-4 text-white" />
        ) : plat === "tw" ? (
          <Twitter className="w-4 text-blue-400" />
        ) : plat === "bmc" ? (
          <Coffee className="w-4 text-yellow-300" />
        ) : plat === "in-ch" ? (
          <MessageSquare className="w-4 text-accent-default" />
        ) : plat === "in-ta" ? (
          <BarChart2 className="w-4 text-green-500" />
        ) : null}
      </article>
      <p className="small">{content}</p>
    </div>
  );
}

NotificationUnit.propTypes = {
  type: PropTypes.string,
  plat: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
