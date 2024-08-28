const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  path: String,
  filename: String,
});

module.exports = mongoose.model("Resume", ResumeSchema);
