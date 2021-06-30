const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({
    message: "Hello there, this is the user route.",
  });
});

export default router;
