import timeAgo from '@/lib/calcTimeAgo';
import { ListingStatus, Project } from '@/../../@types/project';
import { memo, useRef } from 'react';
import { FiBox, FiEye, FiMoreHorizontal, FiStar } from 'react-icons/fi';
import { BiTrendingUp } from 'react-icons/bi';
import { AiFillFire } from 'react-icons/ai';
import useMediaQuery from '@/lib/useMediaQuery';

export const iconListingStatusXref: Record<
  ListingStatus,
  { icon: JSX.Element; colour: string }
> = {
  trending: {
    icon: <BiTrendingUp />,
    colour: 'orange-500'
  },
  hot: { icon: <AiFillFire />, colour: 'red-500' },
  featured: { icon: <FiStar />, colour: 'yellow-500' }
};

export default memo(function ProjectUnit({
  onClickProject,
  small,
  inView,
  ...props
}: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const localClass = useMediaQuery(wrapper.current as HTMLElement);
  console.log({ localClass });
  return (
    <div
      ref={wrapper}
      className={`transition-shadow hover:shadow-lg ${
        inView ? 'shadow-xl' : ''
      }`}>
      <div className='flex justify-between items-center text-gray-600'>
        <div className='flex items-center'>
          <div className='bg-gray-300 rounded-full w-10 h-10 text-white flex items-center justify-center'>
            <FiBox className='text-2xl' />
          </div>
          <p
            title={props.name}
            className='font-bold mx-2 whitespace-nowrap w-32 overflow-hidden overflow-ellipsis'>
            {props.name}
          </p>
        </div>
        <div className='flex items-center'>
          <div className='flex text-gray-500 text-sm items-center whitespace-nowrap'>
            <FiEye />
            <span className='ml-2'>
              {props.views} <span className='text-xs'>(views)</span>
            </span>
          </div>
          <FiMoreHorizontal className='ml-3 text-gray-700' />
        </div>
      </div>
      <span className='block text-sm text-gray-600 my-2'>
        {`${props.description.substr(0, 180)}... `}
      </span>
      <span className='text-sm text-blue-500 underline'>Read more</span>
      <div className='flex justify-between items-center'>
        <div className='flex items-start my-3 '>
          <img
            src={props.owner_details.img_uri}
            alt='project_leader'
            className='rounded-full w-10 h-10'
          />
          <div className='flex flex-col pl-2'>
            <span className='captialize text-sm text-blue-500 cursor-pointer hover:underline'>
              {props.owner_details.name} <small>(Project organiser)</small>
            </span>
            <span className='text-xs text-gray-500 italic'>
              {props.owner_details.email}
            </span>
          </div>
        </div>
        <small className='text-gray-500 font-sm'>
          Created {timeAgo(props.created_date)} (
          {new Date(props.created_date).toLocaleDateString()})
        </small>
      </div>
    </div>
  );
});

interface Props extends Project {
  onClickProject?: (p: Project) => void;
  small?: boolean;
  inView?: boolean;
}
