import PropTypes, { InferProps } from "prop-types";
export default function Avatar({
  imgUrl,
  notify,
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
        className={` ${
          notify === true ? `absolute` : `hidden`
        } rounded-full box-content bg-accent-default border-dark-300`}
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
  notify: PropTypes.bool,
};

Avatar.defaultProps = {
  imgUrl: "https://twemoji.maxcdn.com/v/13.0.2/72x72/1f47d.png",
  notify: false,
};
