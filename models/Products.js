const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
    shop_id: {
        type: Number,
        require: true
    },
    products: [
        {
            brandId: {
                type: Number,
                require: true
            },
            brandName: {
                type: String,
                require: true
            },
            product: [
                {
                    Id: {
                        type: Number,
                        require: true
                    },
                    name: {
                        type: String,
                        require: true
                    },
                    offer: {
                        type: String,
                        require: true
                    },
                    sizes: {
                        type: [String],
                        require: true
                    },
                    gender: {
                        type: [String],
                        require: true
                    }
                }
            ]
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);