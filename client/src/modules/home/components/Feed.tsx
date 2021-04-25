import { Project } from '@/../../@types/project';
import ProjectUnit from '@/modules/home/components/Project';

export default function ProjectListings({ projects, onClickProject }: Props) {
  return (
    <ul className='list-none h-full overflow-x-hidden w-full'>
      {projects.map(projectData => (
        <li key={projectData.id}>
          <ProjectUnit {...projectData} onClickProject={onClickProject} />
        </li>
      ))}
    </ul>
  );
}

interface Props {
  projects: Project[];
  onClickProject?: (p: Project) => void;
}
