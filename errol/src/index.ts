import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import auth from "./auth";

const prisma = new PrismaClient();

async function main() {
  const app = express();
  app.use(cors());
  // app.use(
  //   cors({
  //     origin: (origin: any, cb: Function) => {
  //       if (
  //         ["http://localhost:3000", "https://hoot.vercel.app"].indexOf(
  //           origin,
  //         ) != -1
  //       )
  //         cb(null, true);
  //       else cb(new Error("🤖 CORS 🔥"));
  //     },
  //   }),
  // );
  app.use(express.json());
  app.use("/auth", auth);
  app.get("/", (_, res) => {
    res.json({
      message: "Hello World 🌎",
    });
  });
  app.listen(4000, () =>
    console.log("server started at http://localhost:4000/"),
  );
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
