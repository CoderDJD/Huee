"use strict";
exports.__esModule = true;
var schema_1 = require("./schema");
require("dotenv").config();
var corsconfig;
if (process.env.NODE_ENV == "production")
  corsconfig = {
    origin: function (origin, cb) {
      if (["https://huee.chat"].indexOf(origin) != -1) cb(null, true);
      else cb(new Error("🤖 CORS 🔥"));
    },
  };
else corsconfig = {};
var express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  monk = require("monk"),
  db = monk("localhost/hueedb"),
  users = db.get("users"),
  ApolloServer = require("apollo-server-express").ApolloServer,
  posts = db.get("posts"),
  server = new ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers,
  }),
  app = express();
server.applyMiddleware({ app: app });
app.listen(process.env.PORT, function () {
  return console.log(
    "Now browse to http://localhost:" + process.env.PORT + server.graphqlPath
  );
});
