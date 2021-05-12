require("dotenv").config();
const app = require("express")();
app.use(require("helmet")());
app.use(require("cors")());
app.use(require("morgan")("dev"));
app.get("/", (req, res) => {
  res.json({ message: "Docker? Whoa." });
});
const PORT = process.env.PORT;
app.listen(PORT, console.log(`Listening on http://localhost:${PORT}/ .`));
