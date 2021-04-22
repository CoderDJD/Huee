import { Project } from "@globaltypes/project";
import React, { memo } from "react";

interface Props {
  details: Project;
  onClearProject(): void;
}

const ViewProjectDetails = ({ details, onClearProject }: Props) => {
  return (
    <div className="bg-white h-full w-3/12">
      {JSON.stringify(details, null, 2)}
    </div>
  );
};

export default memo(ViewProjectDetails);
