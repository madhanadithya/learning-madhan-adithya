var express = require("express");
var router = express.Router();
const CarRentalUserController = require("../controllers/carRentalUsers");

router.post("/", CarRentalUserController.createCarUser);

router.get("/", CarRentalUserController.getCarUser);

router.get("/:id", CarRentalUserController.getCarUserById);

router.put("/:id", CarRentalUserController.putCarUser);

router.patch("/:id", CarRentalUserController.patchCarUser);

router.delete("/:id", CarRentalUserController.deleteCarUser);

module.exports = router;
