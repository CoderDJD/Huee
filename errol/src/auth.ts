import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/github", async (req, res) => {
  const { uname } = req.query;
  console.log(uname);
  fetch(`https://api.github.com/users/${uname}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      res.json({ user: json });
    });
});

export default router;
