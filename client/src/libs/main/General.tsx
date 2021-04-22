import React, { useMemo, useState } from "react";
import { RouteComponentProps } from "react-router";
import { FiFilter, FiSearch } from "react-icons/fi";
import Feed from "./projectfeed/Feed";
import RootSelectors from "../../store/root/selector";
import Filters from "./projectfeed/filters/Filters";
import { Project } from "../../@types/project";
import { useSelector } from "react-redux";
export default function General(props: RouteComponentProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const allProjects = useSelector(RootSelectors.getProjects);
  const projects = useMemo(() => {
    console.log();
  }, [filters]);
  return (
    <div className="w-full h-full flex items-start">
      <div className="flex flex-col" />
      <div className="p-3 pt-10 flex flex-col bg-gray-100" />
      <div className="flex flex-col">
        <Filters
          filters={filters}
          onChangeFilters={(paramFilters: Record<string, string>) => {
            setFilters(paramFilters);
          }}
        />
        <Feed projects={projects} />
      </div>
    </div>
  );
}
