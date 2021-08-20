import express from "express";
import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";
import { checkIfUser } from "./util/checkUser";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/github", async (req, res) => {
  let signedUp;
  const { uname } = req.query;
  if (typeof uname == "string") {
    signedUp = await checkIfUser(uname?.toString());
    if (!signedUp) {
      fetch(`https://api.github.com/users/${uname}`)
        .then(res => res.json())
        .then(user => {
          return {
            uname: uname,
            bio: user.bio,
            name: user.name,
            avatar: user.avatar_url,
            github: user.html_url,
          };
        })
        .then(async u => {
          try {
            const user = prisma.user.create({
              data: {
                uname: u.uname,
                bio: u.bio,
                avatar: u.avatar,
                name: u.name,
                github: u.github,
              },
            });
            prisma.member.create({
              data: {
                uname: u.uname,
                name: u.name,
                bio: u.bio,
              },
            });
            res.json(user);
          } catch (err) {
            res.json({ err: err });
          }
        })
        .catch(err => res.json({ err: err }));
    } else {
      const user = await prisma.user.findUnique({
        where: {
          uname: uname,
        },
      });
      res.json(user);
    }
  } else {
    res.status(400).json({ err: "Query type error." });
  }
});

export default router;
