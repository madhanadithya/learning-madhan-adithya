const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  path: String,
  filename: String,
});

module.exports = mongoose.model("Image", ImageSchema);
