import { Project, ProjectTeam } from "../../../@types/project";
import faker from "faker";
import { UserDetails } from "@/../../@types/user";
export const createProject = () => {
  const participants = [] as UserDetails[],
    videos = [] as string[],
    teams = [] as ProjectTeam[],
    images = [] as string[],
    designs = [] as string[];
  return {
    description: faker.random.words(),
    participants,
    createddate: "",
    private: faker.random.boolean(),
    teams,
    github: "",
    facebook: "",
    youtube: "",
    twitch: "",
    twitter: "",
    roadmap: "",

    deleted: false,
    completed: faker.random.boolean(),
    currentprogress: faker.random.number(100), // Out of 100,
    projectavatar: faker.image.avatar(),
    images,
    videos,
    prototype: "",
    designs
  } as Project;
};

export const PROJECTS = [...Array(20)].map(() => createProject());
export const [CURRENT_PROJECT] = PROJECTS;
