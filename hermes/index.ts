import user from "./routes/user";
const app = require("express")();
app.use(require("volleyball"));
app.use("/user", user);

app.get("/", (req, res) => {
  res.json({ message: "Hello World! 🥳" });
});
app.listen(8000, console.log("Listening on http://localhost:8000/"));
