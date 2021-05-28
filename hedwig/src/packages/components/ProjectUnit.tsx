import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-feather";
export default function ProjectUnit({
  name,
  liveUrl,
  description,
}: InferProps<typeof ProjectUnit.propTypes>) {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg transition duration-200 ease-in-out bg-dark-500 hover:bg-dark-300 hover:shadow-lg">
      <section className="flex space-x-2 items-center">
        <h3>{name}</h3>
        {liveUrl !== "" ? (
          <a href={liveUrl} className="text-accent-hover">
            <Link className="w-4 h-4" />
          </a>
        ) : null}
      </section>
      <p className="small">{description}</p>
    </div>
  );
}

ProjectUnit.propTypes = {
  liveUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectUnit.defaultProps = {
  liveUrl: "https://hoot.vercel.app/",
  name: "Hoot",
  description:
    "We help developers gain contributors for thier open source projects. We provide a platform through which we think you can finish your projects easier, and faster.",
};
