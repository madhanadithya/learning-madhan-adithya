var express = require("express");
var router = express.Router();

const productController = require("../controllers/products");

router.post("/", productController.createProduct);

router.get("/", productController.getProduct);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.putProduct);

router.patch("/:id", productController.patchProduct);

router.delete("/:id", productController.deleteProduct);

router.get(
  "/productsearch/availability/:availability",
  productController.getProductByAvailability
);

router.get("/productsearch/name/:name", productController.getProductByName);

router.get("/productsearch/price/:price", productController.getProductByPrice);

module.exports = router;
