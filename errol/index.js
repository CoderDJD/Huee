const volleyball = require("volleyball");
const auth = require("./auth/main");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(helmet());
app.use(volleyball);
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    message: "Hello World! 🥳",
  });
});

app.use("/auth", auth);

app.listen(
  8080,
  console.log("Listening for requests on http://localhost:8080/"),
);
