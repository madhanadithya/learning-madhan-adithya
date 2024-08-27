// var express = require('express');
// var router = express.Router();
// const User = require("../models/users");
// const bcrypt = require("bcrypt");


// /* GET users listing. */
// router.get('/', async function(req, res, next) {
  
//     let results = await User.find();
//     res.json(results);
// });

// router.post("/", async function (req, res, next) {
//   let user = await User.findOne({
//     email: req.body.email,
//   });
//   if(user){
//     return res.status(400).json({
//       msg:"user does already exist",
//     });
//   }

//   const salt = await bcrypt.genSalt(10);
//   let encryptedPassword = await bcrypt.hash(req.body.password, salt);
//   var userOb = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: encryptedPassword,
//     isValid: req.body.isValid,
//   });
//   console.log(userOb);
//   const result = await userOb.save();
//   res.json({status : 1, data : result});
// });


// module.exports = router;




var express = require('express');
var router = express.Router();
const userController = require("../controllers/users");


/* GET users listing. */

router.post("/", userController.createUser);

router.post("/login", userController.login);

router.get("/", userController.getUser);

module.exports = router;
