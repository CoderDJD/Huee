import { Prisma, PrismaClient } from "@prisma/client";
const express = require("express");
const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  const { email } = req.params;
  prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err))
    .finally(() => {
      prisma.$disconnect();
    });
});

export default router;
