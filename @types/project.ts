import { UserDetails } from "./user";
export interface ProjectTeam {
  name: string;
  colour: string; // Aesthetics
  created_date: string;
  participants: UserDetails[];
  img_uri: string;
}

export type SocialMedia =
  | "facebook"
  | "twitter"
  | "twitch"
  | "discord"
  | "youtube";
export type ListingStatus = "trending" | "hot" | "featured";
export interface Project {
  id: string;
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
  prototype_url: string;
  designs: string[];
  listing_status: ListingStatus;
}
