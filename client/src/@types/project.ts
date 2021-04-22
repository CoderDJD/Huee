import { UserDetails } from "./user";

export interface ProjectTeam {
  name: string;
  colour: string; // Any colour they like most likely a selection
  createdDate: string;
  participants: UserDetails[];
  imgUri: string;
}
export type SocialMedia = "facebook" | "twitter" | "twitch" | "discord";
export interface Project {
  id: string;
  description: string;
  createdDate: string;
  private: boolean;
  teams: ProjectTeam[];
  social_links: Record<SocialMedia, string>;
  roadmap: Record<string | "completed", string>[];
  completed: boolean;
  logo: string;
  banner_image?: string;
  owner_details: UserDetails;
  images: string[];
  name: string;
  views: number;
  videos: string[];
  prototype_url: string;
  designs: string[];
}
