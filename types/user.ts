import { Project } from "./project";
export interface User {
  id: string;
  name: string;
  uname: string;
  email: string;
  dob: string;
  online: boolean;
  created_date: string;
  img_uri: string;
  projects?: Project[];
}

export type UserDetails = Pick<User, "email" | "uname" | "name" | "online">;
