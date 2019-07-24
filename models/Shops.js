const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ShopSchema = new Schema({
    shop_id: {
        type: Number,
        require: true
    },
    handler: {
        type: String,
        require: true
    },
    boutique: {
      type: String,
      require: true
    },
    uniform: {
        type: String,
        require: true
    },
    name: {
         type: String,
         require: true
    },
    gender: {
        type: [String],
        require: true
    },
    owner: {
        type: String,
        require: true
    },
    since: {
        type: Number,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    locallity: {
        type: String,
        require: true
    },
    subLocallity: {
        type: String,
        require: true
    },
    subSubLocallity: {
        type: Number,
        require: true
    },
    pinCode: {
        type: Number,
        require: true
    },
    latitude: {
        type: String,
        require: true
    },
    longitude: {
        type: String,
        require: true
    },
    category: {
        type: Number,
        require: true
    },
    collections: {
        type: [String],
        require: true
    },
    products: {
        type: [String],
        require: true
    },
    brands: {
        type: [String],
        require: true
    },
    offer: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Shop = mongoose.model('shops', ShopSchema);
