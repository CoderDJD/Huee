import React, { useCallback, useMemo, useState } from "react";
import Filters from "./filters/Filters";
import { Project } from "@globaltypes/project";
import { useSelector } from "react-redux";
import Feed from "./feed/Feed";
import { RootState } from "@/store";
import ViewProjectDetails from "./ViewProjectDetails";

const General = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [viewingProjectDetails, setViewingProjectDetails] = useState<Project>(
    {} as Project
  );
  const allProjects = useSelector((state: RootState) => state.root.projects);
  const projects = useMemo(() => {
    return allProjects;
  }, [filters]);
  const onChangeFilters = (paramFilters: Record<string, string>) => {
    setFilters(paramFilters);
  };
  const onClickProject = (proj: Project) => {
    console.log({ proj });
  };
  const onClearProject = useCallback(() => {
    console.log("hello");
  }, []);
  return (
    <div className="w-full h-full flex items-start">
      <p>Listings</p>
      <div className="flex flex-col" />
      <div className="p-3 pt-10 flex flex-col bg-gray-50" />
      <div className="flex flex-col h-full">
        <Filters filters={filters} onChangeFilters={onChangeFilters} />
        <div className="flex w-full items-start flex-1 h-full">
          <Feed projects={projects} onClickProject={onClickProject} />
          <ViewProjectDetails
            onClearProject={onClearProject}
            details={viewingProjectDetails}
          />
        </div>
      </div>
    </div>
  );
};
export default General;
