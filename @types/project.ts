import { UserDetails } from "./user";

export interface ProjectTeam {
  name: string;
  colour: string; // Any colour they like most likely a selection
  created_date: string;
  participants: UserDetails[];
  img_uri: string;
}
export type SocialMedia = "facebook" | "twitter" | "twitch" | "discord";
export interface Project {
  description: string;
  created_date: string;
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
  prototype_url: string; // Can be a URL or an image
  designs: string[];
}
