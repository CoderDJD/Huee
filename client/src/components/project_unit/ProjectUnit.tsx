import { Project } from "@/../../@types/project";
import React, { memo } from "react";

interface Props extends Project {
  onClickProject?: (p: Project) => void;
  small?: boolean;
}

const ProjectUnit = ({ onClickProject, small, ...props }: Props) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};

export default memo(ProjectUnit);
