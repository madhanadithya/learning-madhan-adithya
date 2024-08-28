var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ProfessionEnum = ["IT", "Sales", "Unemployed"];

var CarRentalUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  profession: { type: String, enum: ProfessionEnum, required: true },
  password: { type: String, required: true },
});

CarRentalUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("CarRentalUser", CarRentalUserSchema);
