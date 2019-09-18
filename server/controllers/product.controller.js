const mongoose = require('mongoose');
var { Product }  = require('../models/product.model'); 


module.exports.addProduct = (req, res, next) =>{
    var product = new Product();
    product.productName = req.body.productName;
    product.productPrice = req.body.productPrice;
    product.productDesc = req.body.productDesc;
    product.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
           return next(err);
    });
}

module.exports.productDetails = (req, res, next) => {
    Product.findOne({_id : req._id},
        (err, product) => {
            if (!product)
                return res.status(404).json({ status: false, message: 'Product record not found.' });
            else
                return res.status(200).json({ status: true, product : _.pick(product,['productName','productPrice']) });
        }
    );
}

module.exports.allProduct = (req, res, next) => {
    Product.find((err, doc) => {
        if(!err)
            res.send(doc);
        else    
            return next(err); 
    });
}