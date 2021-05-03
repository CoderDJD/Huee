import { Project } from "./project";
interface User {
  id: string;
  name: string;
  uname: string;
  email: string;
  online: boolean;
  img_uri: string;
  projects?: Project[];
}
