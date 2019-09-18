const mongoose = require('mongoose');

var productSchema =new mongoose.Schema( productSchema, {
    productName : {
        type : String,
        required : 'Product Name can\'t be empty'
    },
    productPrice : {
        type : String,
        required: 'Product Price can\'t empty'
    },
    productDesc : {
        type : String,
        required: 'Product Description can\'t be empty' 
    }

});

module.exports = { productSchema };
