import { memo } from "react";

const Loader = ({ loading }: Props) => {
  if (loading) return <div className="bg-primary-100" />;
  else return null;
};

export default memo(Loader);
interface Props {
  loading: boolean;
}
