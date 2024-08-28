const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { type: String, required: true, maxLength: 40 },
  price: { type: Number, required: true },
  availability: {
    type: String,
    enum: ["Available", "Not Available"],
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
