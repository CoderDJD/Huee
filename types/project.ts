import { UserDetails } from "./user";
export interface ProjectUserDetails extends UserDetails {
  teamposition: string;
}
export interface ProjectTeamPosition {
  name: string;
  assignees: ProjectUserDetails[];
}
export interface ProjectTeam {
  name: string;
  created: string;
  participants: ProjectUserDetails[];
  avatar: string;
}
export interface Project {
  description: string;
  participants: ProjectUserDetails[];
  createddate: string;
  private: boolean;
  teams: ProjectTeam[];
  github: string;
  facebook: string;
  youtube: string;
  twitch: string;
  twitter: string;
  roadmap: string;

  deleted: boolean;
  completed: boolean;
  currentprogress: number; // Out of 100,
  projectavatar: string;
  images: string[];
  videos: string[];
  prototype: string;
  designs: string[];
}
