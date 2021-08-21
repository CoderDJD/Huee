import express from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { checkIfSignedUp } from "./util/checkSign";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/github", async (req, res) => {
  const { uname, email, password } = req.body;
  if (typeof uname == "string" && typeof email == "string") {
    let signedUp = await checkIfSignedUp(uname?.toString());
    if (!signedUp) {
      let salt = bcrypt.genSaltSync(20);
      const user = await prisma.user.create({
        data: {
          uname: uname,
          email: email,
          password: bcrypt.hashSync(password, salt),
        },
      });
      await prisma.member.create({ data: { uname: uname } });
      res.json({ data: user, err: null });
    } else {
      const user = await prisma.user.findUnique({ where: { email: email } });
      if (user) {
        if (bcrypt.compareSync(password, user.password))
          res.json({ data: user, err: null });
        else res.status(400).json({ data: null, err: "Wrong Password." });
      } else {
        res.status(500).json({
          data: null,
          err: "Internal server error, unable to find user.",
        });
      }
    }
  } else res.status(400).json({ data: null, err: "Query type error." });
});

export default router;
