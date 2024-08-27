// var express = require('express');
// var router = express.Router();


// const productController = require("../controllers/products");

// /* GET users listing. */
// router.get('/', productController.getProduct);

// router.get("/product/:id/:name", productController.getbyid);
// router.post("/product" , productController.createProduct);

// module.exports = router;



var express = require('express');
var router = express.Router();


const productController = require("../controllers/products");

/* GET users listing. */

router.post("/" , productController.createProduct);

router.get('/', productController.getProduct);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.putProduct);

router.patch("/:id", productController.patchProduct);

router.delete("/:id", productController.deleteProduct);


router.get("/productsearch/availability/:availability", productController.getProductByAvailability);

router.get("/productsearch/name/:name", productController.getProductByName);

router.get("/productsearch/price/:price", productController.getProductByPrice);

module.exports = router;



