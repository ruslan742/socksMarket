const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const name = "Alejandro";
  res.send(name);
});

module.exports = router;
