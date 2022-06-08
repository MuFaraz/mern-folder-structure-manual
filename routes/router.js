
var express = require("express");
var router = express.Router();

var productController = require('../controllers/productController');

router.get("/",  productController.index);
router.get("/add",productController.add);

router.post("/add",productController.insert);
router.get("/edit/:id", productController.edit);
router.post("/update/:id", productController.update);
router.get("/delete/:id", productController.delete);
router.get("/view", productController.view);

module.exports = router;
