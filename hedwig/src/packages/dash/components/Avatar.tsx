import PropTypes, { InferProps } from "prop-types";
export default function Avatar({
  imgUrl,
}: InferProps<typeof Avatar.propTypes>) {
  return (
    <div
      className="relative inline-block"
      style={{
        width: "30px",
        height: "30px",
      }}>
      <img
        src={imgUrl}
        alt="your-dp"
        className="rounded-full w-full h-full object-cover"
      />
      <span
        className="rounded-full absolute box-content bg-accent-default border-gray-300"
        style={{
          width: "6px",
          height: "6px",
          right: "1px",
          bottom: "-1px",
          borderWidth: "1px",
        }}></span>
    </div>
  );
}

Avatar.propTypes = {
  imgUrl: PropTypes.string,
};

Avatar.defaultProps = {
  imgUrl: "https://twemoji.maxcdn.com/v/13.0.2/72x72/1f47d.png",
};
