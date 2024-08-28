var express = require("express");
var router = express.Router();
const userController = require("../controllers/users");

router.post("/", userController.createUser);

router.post("/login", userController.login);

router.get("/", userController.getUser);

module.exports = router;
