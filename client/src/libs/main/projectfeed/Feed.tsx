import { Project } from "@/../../@types/project";
import ProjectUnit from "@/components/project_unit/ProjectUnit";
import React from "react";

interface Props {
  projects: Project[];
  onClickProject?: (p: Project) => void;
}

const ProjectListings = ({ projects, onClickProject }: Props) => {
  return (
    <ul className="list-none">
      {projects.map(projectData => (
        <li key={projectData.id}>
          <ProjectUnit {...projectData} onClickProject={onClickProject} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectListings;
