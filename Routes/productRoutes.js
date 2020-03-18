const express = require('express');
const productController = require('./../controller/productController'); 
const router = express.Router();

router.route('/').post(productController.createAProduct).get(productController.getAllProducts);
router.route('/:id').put(productController.updateAProduct).delete(productController.deletAProduct);

module.exports = router;
