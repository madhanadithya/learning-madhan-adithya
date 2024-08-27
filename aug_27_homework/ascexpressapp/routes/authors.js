// var express = require("express");

// const {body, validationResult} = require("express-validator");

// var router = express.Router();
// const Author = require("../models/authors");

// router.post("/", [ 
//     body("first_name")
//         .isLength({min: 3})
//         .withMessage("min length should be 3"),
//     body("last_name")
//         .isLength({max:20})
//         .withMessage("max length can't exceed 20 characters"),
//     async function(req, res, next){
//         const errors = validationResult(req);
//         if(errors.isEmpty()){
//             let {first_name, last_name, dob, dod} = req.body;
//             let authorOb = new Author({first_name, last_name, dob, dod});
//             let result = await authorOb.save();
//             res.json(result);
//         }
//         else{
//             res.send(errors);
//         }
// },
// ]);

// router.get("/", async function(req, res, next){
//     let results = await Author.find();
//     res.json(results);
// });


// router.delete("/:id", async function(req, res, next){
//     let idToDelete = req.params.id;
//     let result = await Author.findByIdAndDelete(idToDelete);
//     res.json(result);
// });



// router.put("/:id", async function(req, res, next){
//     let {first_name , last_name , dob , dod} = req.body;
//     let result = await Author.findByIdAndUpdate(req.params.id, { first_name , last_name , dob , dod });
//     res.json(result);
// });

// router.patch("/:id", async function(req, res, next){
//     let {first_name , last_name , dob , dod} = req.body;
//     let result = await Author.findByIdAndUpdate(req.params.id, { first_name , last_name , dob , dod });
//     res.json(result);
// });

// module.exports = router;



var express = require("express");
var router = express.Router();
const authorController = require("../controllers/authors");

router.post("/", authorController.createAuthor );

router.get("/",  authorController.getAuthor);

router.delete("/:id", authorController.deleteAuthor);

router.put("/:id", authorController.putAuthor);

router.patch("/:id", authorController.patchAuthor );

module.exports = router;