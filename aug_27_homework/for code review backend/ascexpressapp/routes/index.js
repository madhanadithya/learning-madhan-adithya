var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Express contact" });
});

module.exports = router;
