import { useCallback, useMemo, useState } from 'react';
import Filters from './components/Filters';
import { Project } from '@/../../@types/project';
import { useSelector } from 'react-redux';
import Feed from './components/Feed';
import { RootState } from '@/store';
import ViewProjectDetails from './ViewProjectDetails';

export default function Dashboard() {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [viewingProjectDetails, setViewingProjectDetails] = useState<Project>(
    {} as Project
  );
  const allProjects = useSelector((state: RootState) => state.root.projects);
  const projects = useMemo(() => {
    return allProjects;
  }, [filters]);
  function onChangeFilters(paramFilters: Record<string, string>) {
    setFilters(paramFilters);
  }
  function onClickProject(proj: Project) {
    console.log({ proj });
  }
  const onClearProject = useCallback(() => {
    console.log('');
  }, []);
  return (
    <div className='bg-primary-100 w-screen h-screen flex'>
      <span className=''>Listings</span>
      <div className='flex flex-col' />
      <div className='p-3 pt-10 flex flex-col bg-gray-50' />
      <div className='flex flex-col h-full'>
        <Filters filters={filters} onChangeFilters={onChangeFilters} />
        <div className='flex w-full items-start flex-1 h-full'>
          <div className='bg-white w-1/3' />
          <Feed projects={projects} onClickProject={onClickProject} />
          <ViewProjectDetails
            onClearProject={onClearProject}
            details={viewingProjectDetails}
          />
        </div>
      </div>
    </div>
  );
}
