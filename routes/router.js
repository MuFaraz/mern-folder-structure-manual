var express = require("express");
var router = express.Router();

var productController = require('../controllers/productController');

router.get("/",  productController.index);
router.get("/add",productController.add);
router.get("/edit", productController.edit);
router.get("/view", productController.view);

module.exports = router;
