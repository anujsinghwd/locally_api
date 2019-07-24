const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Load shop Model
const Shop = require('../../models/Shops');
// Load Product Model
const Product = require('../../models/Products');

// @route   GET api/shops/test
// @dsec    Tests Shop route
// @access  Public
router.get('/test', (req, res) => {
    res.json({msg: "shops works"});
});

// @route   POST api/profile
// @dsec    Create / Edit Shop Profile
// @access  Private
router.post('/addshop', (req, res) => {

    // Get Fields
    const shopFields = {};
    if(req.body.handler) shopFields.handler = req.body.handler;
    if(req.body.name) shopFields.name = req.body.name;
    if(req.body.shopId) shopFields.shop_id = req.body.shopId;
    if(req.body.category) shopFields.category = req.body.category;
    if(req.body.state) shopFields.state = req.body.state;
    if(req.body.city) shopFields.city = req.body.city;
    if(req.body.locallity) shopFields.locallity = req.body.locallity;
    if(req.body.subLocallity) shopFields.subLocallity = req.body.subLocallity;
    if(req.body.subSubLocallity) shopFields.subSubLocallity = req.body.subSubLocallity;
    if(req.body.latitude) shopFields.latitude = req.body.latitude;
    if(req.body.longitude) shopFields.longitude = req.body.longitude;
    if(req.body.category) shopFields.category = req.body.category;
    if(req.body.owner) shopFields.owner = req.body.owner;
    if(req.body.since) shopFields.since = req.body.since;
    if(req.body.contact) shopFields.contact = req.body.contact;
    if(req.body.pinCode) shopFields.pinCode = req.body.pinCode;
    if(req.body.offer) shopFields.offer = req.body.offer;

    // gender split into array
    if(typeof req.body.gender !== 'undefined'){
        shopFields.gender = req.body.gender.split(',');
    }

    // products split into array
    if(typeof req.body.products !== 'undefined'){
        shopFields.products = req.body.products.split(',');
    }

    // brands split into array
    if(typeof req.body.brands !== 'undefined'){
        shopFields.brands = req.body.brands.split(',');
    }

    // collections split into array
    if(typeof req.body.collections !== 'undefined'){
        shopFields.collections = req.body.collections.split(',');
    }

    // Check Shop Already exists or not
    Shop.findOne({shop_id: req.body.shopId})
        .then(shops => {
            if(shops)
            {
                if(shopFields.collections){
                    shops.collections = shopFields.collections;
                }
                if(shopFields.gender){
                    shops.gender = shopFields.gender;
                }
                if(shopFields.contact){
                    shops.contact = shopFields.contact;
                }
                if(shopFields.offer){
                    shops.offer = shopFields.offer;
                }
                if(shopFields.products){
                    shops.products = shopFields.products;
                }
                if(shopFields.brands){
                    shops.brands = shopFields.brands;
                }
                shops.save().then(result => res.json(result));
            }
            else
            {
                new Shop(shopFields).save().then(shopprofile => res.json(shopprofile));
            }
        })
});

// @route   POST api/shops
// @dsec    get all Shops by filter
// @access  Public
router.post('/', (req, res) => {
    const errors = {};
    let query = {
        state: req.body.state,
        city: req.body.city
    };

    if(req.body.locallity){
      query.locallity = req.body.locallity;
    }

    if(req.body.gender){
      query.gender = req.body.gender;
    }

    if(req.body.collections){
      query.collections = req.body.collections
    }

    let page = (req.body.page) ? req.body.page : 0;
    if(req.body.productId){
        query.products = req.body.productId;
    }
    if(req.body.brandId){
        query.brands = req.body.brandId;
    }
    if(req.body.offer){
        query.offer = {$gte: req.body.offer};
    }
    if(req.body.boutique){
      query.boutique = 'Y';
    }

    if(req.body.uniform){
      query.uniform = 'Y';
    }

    Shop.find(query)
        .limit(9)
        .skip(9 * page)
        .then(shop => {
            if(shop)
            {
                if(shop.length === 0){
                    errors.nodata = 'no data found in selected filters'
                    res.json(errors);
                }
                res.json(shop);
            }
            else
            {
                errors.noshop = 'There are no Shops';
                res.status(404).json(errors);
            }
        })
        .catch(err => res.status(404).json({noshop: 'There are no shops'}));
});

// @route   GET api/shop/handler/:handler
// @dsec    get Shop by handle
// @access  Public
router.get('/handler/:handler', (req, res) => {
    const errors = {};
    Shop.findOne({ handler: req.params.handler })
        .then(shopProfile => {
            if(!shopProfile){
                errors.noshop = 'There is no shop for this handler';
                return res.status(404).json(errors);
            }
            res.json(shopProfile);
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
