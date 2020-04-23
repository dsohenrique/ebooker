const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const ProductSchema = new mongoose.Schema({
    type: String,
    name: String,
    quantity: Number,
    description: String,
    images: Array,
    price: Number,
    descount: Number,
    isPaused: Boolean,
});

module.exports = mongoose.model('Product', ProductSchema);