import { timeAgo } from "@/lib/calcTimeAgo";
import { ListingStatus, Project } from "@globaltypes/project";
import React, { memo } from "react";
import { FiEye, FiStar } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";

export const iconListingStatusXref: Record<
  ListingStatus,
  { icon: JSX.Element; colour: string }
> = {
  trending: {
    icon: <BiTrendingUp />,
    colour: "orange-500",
  },
  hot: { icon: <AiFillFire />, colour: "red-500" },
  featured: { icon: <FiStar />, colour: "yellow-500" },
};
interface Props extends Project {
  onClickProject?: (p: Project) => void;
  small?: boolean;
}

const ProjectUnit = ({ onClickProject, small, ...props }: Props) => {
  return (
    <div className="px-5 py-2 my-5 bg-white rounded-md shadow-md hover:shadow-lg">
      <div className="flex justify-between">
        <p className="font-bold">{props.name}</p>

        <div className="flex text-gray-500 text-sm items-center">
          <FiEye />
          <span className="ml-2">
            {props.views} <span className="text-xs">(views)</span>
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-600">
        {`${props.description.substr(0, 180)}... `}
      </span>
      <span className="text-sm text-blue-500 underline">Read more</span>
      <div className="flex justify-between items-center">
        {/* Mini Details */}
        <div className="flex items-start my-2">
          <img
            src={props.owner_details.img_uri}
            alt="project_leader"
            className="rounded-full w-12 h-12"
          />
          <div className="flex flex-col pl-2">
            <span className="captialize text-sm text-blue-500 cursor-pointer hover:underline">
              {props.owner_details.name}
            </span>
            <span className="text-xs text-gray-500 italic">
              {props.owner_details.email}
            </span>
          </div>
        </div>
        {/* Other col */}
        <small className="text-gray-500 font-sm">
          Posted {timeAgo(props.created_date)}
        </small>
      </div>
    </div>
  );
};

export default memo(ProjectUnit);
