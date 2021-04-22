import { User } from "@globaltypes/user";
import faker from "faker";

export const generateUser = (): User => {
  const [fname, lname] = [faker.name.firstName(), faker.name.lastName()];
  const obj: User = {
    id: faker.datatype.uuid(),
    name: `${fname} ${lname}`,
    uname: faker.internet.userName(),
    email: faker.internet.email(),
    dob: faker.date.past().toISOString(),
    online: faker.datatype.boolean(),
    img_uri: faker.image.avatar(),
    created_date: faker.date.recent().toISOString(),
  };
  return obj;
};

export const users = [...Array(20)].map(() => generateUser());
export const [CURRENT_USER] = users;
