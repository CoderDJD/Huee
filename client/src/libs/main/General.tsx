import React, { useMemo, useState } from "react";
import Filters from "./filters/Filters";
import { Project } from "@globaltypes/project";
import { useSelector } from "react-redux";
import Feed from "./projectfeed/Feed";
import { RootState } from "@/store";

const General = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
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
  return (
    <div className="w-full h-full flex items-start">
      <p>Listings</p>
      <div className="flex flex-col" />
      <div className="p-3 pt-10 flex flex-col bg-gray-100" />
      <div className="flex flex-col">
        <Filters filters={filters} onChangeFilters={onChangeFilters} />
        <Feed projects={projects} onClickProject={onClickProject} />
      </div>
    </div>
  );
};
export default General;
