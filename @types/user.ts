export interface User {
  id: string;
  name: string;
  uname: string;
  email: string;
  dob: string;
  online: boolean;
  img_uri: string;
}

export type UserDetails = Pick<User, "email" | "uname" | "name" | "online">;
