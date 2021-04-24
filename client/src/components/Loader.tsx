import { memo } from "react";

export default memo(function Loader({ loading }: Props) {
  if (loading) return <div className="bg-primary-100" />;
  else return null;
});
interface Props {
  loading: boolean;
}
