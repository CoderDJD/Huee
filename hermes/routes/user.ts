import { PrismaClient } from "@prisma/client";
const express = require("express");
const prisma = new PrismaClient();
const router = express.Router();
require("dotenv").config();

router.use(express.json());

router.get("/", (req, res) => {
  const { email } = req.params;
  console.log(req.params);
  prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json({
        error: err,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
});

router.post("/", (req, res) => {
  const { data } = req.body;
  prisma.user
    .create(data)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    })
    .finally(() => {
      prisma.$disconnect();
    });
});

export default router;
