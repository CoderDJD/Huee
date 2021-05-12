import { User } from "./user";
export interface ProjectTeam {
  name: string;
  created_date: string;
  participants: User[];
  img_uri: string;
}

export interface Project {
  id: string;
  url: string;
  name: string;
  open: boolean;
  // URI to the logo.
  logo: string;
  // URI to the logo.
  banner: string;
  description: string;
  teams: ProjectTeam[];
  // Buy my coffee, !important
  bmcWebhook: string;
  // Youtube
  ytWebhook: string;
  // Twitter
  twtrWebhook: string;
  completed: boolean;
  ownerId: User["id"];
  videos: string[];
  designs: string[];
}
