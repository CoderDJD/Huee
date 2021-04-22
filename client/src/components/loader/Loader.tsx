import React, { memo } from "react";

interface Props {
  loading: boolean;
  className?: string;
}

const Loader = ({ loading, className }: Props) => {
  if (loading) {
    return (
      <div className={className}>
        <span>Loading...</span>
      </div>
    );
  } else {
    return null;
  }
};

export default memo(Loader);
