var express = require("express");
const { body, validationResult } = require("express-validator");
var router = express.Router();
const bcrypt = require("bcrypt");
const CarRentalUser = require("../models/carRentalUser");


router.post("/", [
    body("username").isLength({ min: 3 }).withMessage("Username must be at least 3 characters long."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("age").isInt({ min: 18 }).withMessage("Age must be at least 18."),
    body("gender").isIn(['male', 'female']).withMessage("Gender must be either 'male' or 'female'."),
    body("dob").isDate().withMessage("Invalid date of birth."),
    body("city").isLength({ min: 3 }).withMessage("City must be at least 3 characters long."),
    body("profession").isIn(['IT', 'Sales', 'Unemployed']).withMessage("Profession must be one of 'IT', 'Sales', or 'Unemployed'."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
    async function (req, res, next) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let { username, email, age, gender, dob, city, profession, password } = req.body;
            let user = new CarRentalUser({ username, email, age, gender, dob, city, profession, password });
            let result = await user.save();
            res.json(result);
        } else {
            res.status(400).json(errors.array());
        }
    }
]);


router.get("/", async function (req, res, next) {
    let results = await CarRentalUser.find();
    res.json(results);
});


router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await CarRentalUser.findById(id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

router.put("/:id", [
    body("username").optional().isLength({ min: 3 }).withMessage("Username must be at least 3 characters long."),
    body("email").optional().isEmail().withMessage("Invalid email format."),
    body("age").optional().isInt({ min: 18 }).withMessage("Age must be at least 18."),
    body("gender").optional().isIn(['male', 'female']).withMessage("Gender must be either 'male' or 'female'."),
    body("dob").optional().isDate().withMessage("Invalid date of birth."),
    body("city").optional().isLength({ min: 3 }).withMessage("City must be at least 3 characters long."),
    body("profession").optional().isIn(['IT', 'Sales', 'Unemployed']).withMessage("Profession must be one of 'IT', 'Sales', or 'Unemployed'."),
    body("password").optional().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
    async function (req, res, next) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let { username, email, age, gender, dob, city, profession, password } = req.body;
            let updateData = { username, email, age, gender, dob, city, profession, password };
            if (password) {
                const salt = await bcrypt.genSalt(10);
                updateData.password = await bcrypt.hash(password, salt);
            }
            let result = await CarRentalUser.findByIdAndUpdate(req.params.id, updateData, { new: true });
            res.json(result);
        } else {
            res.status(400).json(errors.array());
        }
    }
]);

router.patch("/:id", [
    body("username").optional().isLength({ min: 3 }).withMessage("Username must be at least 3 characters long."),
    body("email").optional().isEmail().withMessage("Invalid email format."),
    body("age").optional().isInt({ min: 18 }).withMessage("Age must be at least 18."),
    body("gender").optional().isIn(['male', 'female']).withMessage("Gender must be either 'male' or 'female'."),
    body("dob").optional().isDate().withMessage("Invalid date of birth."),
    body("city").optional().isLength({ min: 3 }).withMessage("City must be at least 3 characters long."),
    body("profession").optional().isIn(['IT', 'Sales', 'Unemployed']).withMessage("Profession must be one of 'IT', 'Sales', or 'Unemployed'."),
    body("password").optional().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
    async function (req, res, next) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let updateData = req.body;
            if (updateData.password) {
                const salt = await bcrypt.genSalt(10);
                updateData.password = await bcrypt.hash(updateData.password, salt);
            }
            let result = await CarRentalUser.findByIdAndUpdate(req.params.id, updateData, { new: true });
            res.json(result);
        } else {
            res.status(400).json(errors.array());
        }
    }
]);

router.delete("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await CarRentalUser.findByIdAndDelete(id);
    if (result) {
        res.json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

module.exports = router;
