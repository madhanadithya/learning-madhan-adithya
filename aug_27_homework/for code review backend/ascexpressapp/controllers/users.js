const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

exports.createUser = async function (req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).json({
      msg: "user does already exist",
    });
  }

  const salt = await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(req.body.password, salt);
  var userOb = new User({
    username: req.body.username,
    email: req.body.email,
    password: encryptedPassword,
    isValid: req.body.isValid,
  });
  console.log(userOb);
  const result = await userOb.save();
  res.json({ status: 1, data: result });
};

exports.index = async function (req, res, next) {
  // res.send("respond with a resource");

  const salt = await bcrypt.genSalt(10);
  res.json(req.body);
};

exports.getUser = [
  auth,
  async function (req, res, next) {
    let results = await User.find();
    res.json(results);
  },
];

exports.login = async function (req, res) {
  const { email, password } = req.body;
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user)
    return res.status(400).json({
      message: "user not exit",
    });
  const passCorrect = await bcrypt.compare(password, user.password);
  if (!passCorrect) {
    return res.status(400).json({
      message: "Wrong Password !",
    });
  }

  const payload = {
    user: {
      id: user.id,
      email: email,
    },
  };

  jwt.sign(
    payload,
    "ascendion_secret",
    {
      expiresIn: 12000,
    },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({
        token,
      });
    }
  );
};
