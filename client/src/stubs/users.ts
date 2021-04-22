import { User } from "@/@types/user";
import faker from "faker";

export const generateUser = () => {
  const [fname, lname] = [faker.name.firstName(), faker.name.lastName()];
  const obj = {
    id: faker.datatype.uuid(),
    name: `${fname} ${lname}`,
    uname: faker.internet.userName(),
    email: faker.internet.email(),
    dob: faker.date.past().toISOString(),
    online: faker.datatype.boolean(),
    imgUri: faker.image.avatar(),
    createdDate: faker.date.recent().toISOString()
  } as User;
  return obj;
};

export const users = [...Array(20)].map(() => generateUser());
export const [CURRENT_USER] = users;
