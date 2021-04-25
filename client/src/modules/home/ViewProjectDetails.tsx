import { Project } from '@/../../@types/project';
import { memo } from 'react';

export default memo(function ViewProjectDetails({
  details,
  onClearProject
}: Props) {
  return (
    <div className='bg-white h-full w-3/12'>
      {JSON.stringify(details, null, 2)}
    </div>
  );
});

interface Props {
  details: Project;
  onClearProject(): void;
}
