import { Project } from "./project";
export interface User {
  id: string;
  name: string;
  uname: string;
  email: string;
  online: boolean;
  imgUri: string;
  projects?: Project[];
}
