const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    description: {
        type: String,
        trim: true
    }
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;