const mongoose = require('mongoose');
const productDetailsSchema = new mongoose.Schema({
    price: Number,
    size: String,
    pid: String
});
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
module.exports = ProductDetails;