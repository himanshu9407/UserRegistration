const express = require('express');
const router = express.Router();

const ctrlProduct = require('../controllers/product.controller');

router.post('/addProduct', ctrlProduct.addProduct);
router.get('/allProduct', ctrlProduct.allProduct);
router.get('/productDetails', ctrlProduct.productDetails);

module.exports = router;