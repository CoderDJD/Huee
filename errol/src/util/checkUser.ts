import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function checkIfUser(uname: string) {
  const user = await prisma.user.findUnique({
    where: { uname: uname },
  });
  if (user == null) return false;
  return true;
}
