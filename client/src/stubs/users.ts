import { User as UserType } from "@/../../@types/user";
import faker from "faker";

export const generateUser = () => {
  const [fname, lname] = [faker.name.firstName(), faker.name.lastName()];
  return {
    name: `${fname} ${lname}`,
    uname: faker.internet.userName(),
    email: faker.internet.email(),
    img_uri: faker.image.avatar(),
    dob: faker.date.past().toISOString(),
    id: faker.datatype.uuid(),
  } as UserType;
};

export const users = [...Array(20)].map(() => generateUser());
export const [CURRENT_USER] = users;
