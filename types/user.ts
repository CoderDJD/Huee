export interface User {
  firstname: string;
  lastname: string;
  dateofbirth: string;
  online: string;
  email: string;
  avatar: string;
  fullname: string;
  id: string;
  username: string;
}
export type UserDetails = Pick<User, "firstname" | "lastname" | "email" | "id">;
