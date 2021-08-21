import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Checks whether a given user is actually a first time sign up or signing in
 * @param {string} uname
 * @returns {boolean} true if user is signing up, false if not.
 */

export async function checkIfSignedUp(uname: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { uname: uname },
  });
  if (user == null) return false;
  return true;
}
