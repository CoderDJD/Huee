import React, { useMemo, useState } from "react";

import { RouteComponentProps } from "react-router";
import { FiFilter, FiSearch } from "react-icons/fi";
import Filters from "./filters/Filters";
import { Project } from "@/../../@types/project";
import { useSelector } from "react-redux";
export default function General(props: RouteComponentProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const allProjects = useSelector(getProjects);
  const projects = useMemo(() => {
    // Filter the projects by selected filters;
  }, [filters]);
  const onChangeFilters = (paramFilters: Record<string, string>) => {
    setFilters(paramFilters);
  };
  const onClickProject = (proj: Project) => {
    console.log(proj);
  };
  return (
    <div className="w-full h-full flex items-start">
      <div className="flex flex-col"></div>
      <div className="p-3 pt-10 flex flex-col bg-gray-100"></div>
      <div className="flex flex-col">
        <Filters filters={filters} onChangeFilters={onChangeFilters} />
        <ProjectListings projects={projects} onClickProject={} />
      </div>
    </div>
  );
}
