const { body, validationResult } = require("express-validator");
const Product = require("../models/products");

exports.createProduct = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters long."),
  body("price").isInt({ min: 0 }).withMessage("price can't be negative."),
  body("availability")
    .isIn(["Available", "Not Available"])
    .withMessage("Availability must be one of 'Available', 'Not Available'"),

  async function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let { name, price, availability } = req.body;
      let product = new Product({ name, price, availability });
      let result = await product.save();
      res.json(result);
    } else {
      res.status(400).json(errors.array());
    }
  },
];

exports.getProduct = async function (req, res, next) {
  let results = await Product.find();
  res.json(results);
};

exports.getProductById = async function (req, res, next) {
  let id = req.params.id;
  let result = await Product.findById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

exports.putProduct = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters long."),
  body("price").isInt({ min: 0 }).withMessage("price can't be negative."),
  body("availability")
    .isIn(["Available", "Not Available"])
    .withMessage("Availability must be one of 'Available', 'Not Available'"),

  async function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let { name, price, availability } = req.body;
      let updateData = { name, price, availability };

      let result = await Product.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
      });
      res.json(result);
    } else {
      res.status(400).json(errors.array());
    }
  },
];

exports.patchProduct = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters long."),
  body("price").isInt({ min: 0 }).withMessage("price can't be negative."),
  body("availability")
    .isIn(["Available", "Not Available"])
    .withMessage("Availability must be one of 'Available', 'Not Available'"),

  async function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let { name, price, availability } = req.body;
      let updateData = { name, price, availability };

      let result = await Product.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
      });
      res.json(result);
    } else {
      res.status(400).json(errors.array());
    }
  },
];

exports.deleteProduct = async function (req, res, next) {
  let id = req.params.id;
  let result = await Product.findByIdAndDelete(id);
  if (result) {
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

exports.getProductByAvailability = async function (req, res, next) {
  let result = await Product.find({ availability: req.params.availability });
  res.json(result);
};

exports.getProductByName = async function (req, res, next) {
  let result = await Product.find({ name: req.params.name });
  res.json(result);
};

exports.getProductByPrice = async (req, res) => {
  try {
    const minPrice = parseFloat(req.params.price);

    if (isNaN(minPrice)) {
      return res.status(400).json({ message: "Invalid price parameter" });
    }

    const products = await Product.find({ price: { $gt: minPrice } });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
