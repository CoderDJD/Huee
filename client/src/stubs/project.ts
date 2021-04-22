import { Project, ProjectTeam } from "../../../@types/project";
import faker from "faker";
import { generateUser } from "./users";
import { User, UserDetails } from "@/../../@types/user";
export function generateImages(
  count: number,
  key: keyof typeof faker.image = "fashion"
) {
  const images = faker.image[key];
  return count ? [...Array(count)].map((x) => images()) : images();
}
export function generateUsers(count: number) {
  return [...Array(count)].map((x) => generateUser());
}
export function generateTeam(userList: User[], teamLen: number = 10) {
  return {
    name: faker.name.jobTitle(),
    created_date: faker.date.recent().toISOString(),
    img_uri: faker.image.technics(),
    colour: faker.commerce.color(),
    participants: [
      ...Array(teamLen).map(() => {
        const u = userList[Math.random() * userList.length];
        return {
          name: u.name,
          online: u.online,
          uname: u.uname,
          email: u.uname,
        } as UserDetails;
      }),
    ],
  } as ProjectTeam;
  // Pick random users
}
export function pickRandomFromArray<T>(params: T[]) {
  return params[Math.random() * params.length];
}
export function generateProject(): Project {
  const ALL_PARTICIPANTS = [...Array(20)].map(generateUser);

  const videos = [] as string[],
    teams = [generateTeam(ALL_PARTICIPANTS)],
    images = generateImages(20, "abstract"),
    designs = generateImages(20, "city");
  return {
    id: faker.datatype.uuid(),
    description: faker.random.words(),
    name: faker.random.word(),
    designs,
    private: faker.datatype.boolean(),
    owner_details: pickRandomFromArray(ALL_PARTICIPANTS),
    roadmap: {} as Record<string, string>[],
    social_links: {} as Record<string, string>,
    created_date: faker.date.recent().toISOString(),
    completed: faker.datatype.boolean(),
    views: faker.datatype.number(),
    logo: faker.image.business(),
    prototype_url: "",
    teams,
    images,
    videos,
  } as Project;
}

export const PROJECTS = [...Array(20)].map(generateProject);
export const [CURRENT_PROJECT] = PROJECTS;
