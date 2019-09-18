const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true,},  (err) => {
    if( !err ) {  console.log('MongoDb Connection Successed.') ; }
    else {  console.log('Error in MongoDb connection : '  + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');