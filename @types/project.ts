import { User } from "./user";
interface ProjectUserDetails extends User {
  TeamPosition: String;
  Contributions: Number;
}

export interface ProjectTeam {
  Name: String;
  CDate: Date;
  Participants: ProjectUserDetails[];
  Img_uri: String;
}

export interface Project {
  description: String;
  participants: ProjectUserDetails[];
  cdate: String;
  private: Boolean;
  teams: ProjectTeam[];
  github: String;
  fb: String;
  yt: String;
  twitch: String;
  tw: String;
  roadmap: String;
  completed: Boolean;
  progress: Number;
  pro_img_uri: String;
  images: String[];
  videos: String[];
  prototype: String;
  designs: String[];
}
