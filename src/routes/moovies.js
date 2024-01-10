const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("entrei em moovies");
});

module.exports = router;
