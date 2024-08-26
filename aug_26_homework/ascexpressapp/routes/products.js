var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource product');
});

router.get("/product/:id/:name", function(req, res, next){
    let id = req.params.id;
    let name = req.params.name;
    let price = req.params.price;

    res.json({id, name, price});
});
router.post("/product" , function (req, res, next){
    const {id, name, price} = req.body;
    res.json({id, name, price});
});

module.exports = router;
