import faker from "faker";
import { User as UserType } from "../../../types/user";

export const createUser = () => {
  const [fname, lname] = [faker.name.firstName(), faker.name.lastName()];
  return {
    firstname: fname,
    lastname: lname,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    dateofbirth: faker.date.past().toISOString(),
    fullname: `${fname} ${lname}`,
    id: faker.datatype.uuid()
  } as UserType;
};

export const users = [...Array(20)].map(() => createUser());
export const [CURRENT_USER] = users;
