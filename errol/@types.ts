export type User = {
  id?: String;
  bio?: String;
  name?: String;
  uname: String;
  avatar: String;
  createdAt: String;
  updatedAt: String;
  github: String;
  twitter?: String;
  youtube?: String;
  projects: Project[];
};

export interface Project {
  id: String;
  userId: User["id"];
  createdAt: String;
  updatedAt: String;
  github?: String;
  twitter?: String;
  youtube?: String;
  discord?: String;
  bmc?: String;
  ptr?: String;
  applicationUrl?: String;
  name: String;
  description: String;
  ytWebhook?: String;
  bmcWebhook?: String;
  ptrWebhook?: String;
  twtrWebhook?: String;
  people: Member[];
  peopleNum: Number;
  open: Boolean;
}

export interface Member {
  uname: String;
  createdAt: String;
  updatedAt: String;
  name?: String;
  bio?: String;
  projectId?: Project["id"];
}
