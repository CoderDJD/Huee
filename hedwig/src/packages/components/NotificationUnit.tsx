import { GitHub, Twitter, Coffee } from "react-feather";
import PropTypes, { InferProps } from "prop-types";

export default function NotificationUnit({
  type,
  plat,
  project,
  content,
}: InferProps<typeof NotificationUnit.propTypes>) {
  return (
    <div className="flex flex-col w-full p-2 rounded-sm bg-dark-300 shadow-md border-dark-300 ">
      <article className="flex gap-1 items-center">
        <h4>{project}</h4>
        {plat === "gh" ? (
          <GitHub className="w-4 text-accent-default" />
        ) : plat === "tw" ? (
          <Twitter className="w-4 text-blue-400" />
        ) : plat === "bmc" ? (
          <Coffee className="w-4 text-yellow-300" />
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
