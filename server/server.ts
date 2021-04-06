"use strict";
import { validate } from "./validation";
import { Hooter, Hoot, Noter } from "./types";
import { typeDefs, resolvers } from "./schema";
require("dotenv").config();
let corsconfig: object;
if (process.env.NODE_ENV == "production")
  corsconfig = {
    origin: (origin: string, cb: any) => {
      if (["https://huee.chat"].indexOf(origin) != -1) cb(null, true);
      else cb(new Error("🤖 CORS 🔥"));
    },
  };
else corsconfig = {};
const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  monk = require("monk"),
  db = monk("localhost/hueedb"),
  users = db.get("users"),
  { ApolloServer } = require("apollo-server-express"),
  posts = db.get("posts"),
  server = new ApolloServer({ typeDefs, resolvers }),
  app = express();
server.applyMiddleware({ app });
app.listen(
  process.env.PORT,
  console.log(
    `Now browse to http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
