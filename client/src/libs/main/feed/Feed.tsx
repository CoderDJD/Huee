import { Project } from "@globaltypes/project";
import ProjectUnit from "@/libs/main/feed/project_unit/ProjectUnit";
import React from "react";

interface Props {
  projects: Project[];
  onClickProject?: (p: Project) => void;
}

const ProjectListings = ({ projects, onClickProject }: Props) => {
  return (
    <ul className="list-none h-full overflow-x-hidden w-7/12">
      {projects.map((projectData) => (
        <li key={projectData.id}>
          <ProjectUnit {...projectData} onClickProject={onClickProject} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectListings;
