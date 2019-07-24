const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Load shop Model
const Shop = require('../../models/Shops');
// Load Product Model
const Product = require('../../models/Products');


// @route   POST api/shops/addshop
// @dsec    Create / Edit Shop Profile
// @access  Private
/**
 * @api {post} api/shops/addshop Add & Edit Shop Info
 * @apiName AddEditShopInfo
 * @apiGroup Shop
 *
 * @apiParam {String} name Shop Name.
 * @apiParam {String} handler Unique Shop Handler.
 * @apiParam {Number} category Shop's Product Categories.
 * @apiParam {String} state Shop State.
 * @apiParam {String} city Shop City.
 * @apiParam {String} Shop City Shop Locallity.
 * @apiParam {String} subLocallity Shop Sublocallity.
 * @apiParam {String} subSubLocallity Shop subSubLocallity.
 * @apiParam {String} latitude Shop latitude.
 * @apiParam {String} longitude Shop longitude.
 * @apiParam {String} owner Shop Owner Name.
 * @apiParam {Number} shopId Unique Shoip Id.
 * @apiParam {String} contact Shop Contact Number.
 * @apiParam {Number} since Shop Since.
 * @apiParam {Number} pinCode Shop Area PinCode.
 * @apiParam {String} gender Gender Availability.
 * @apiParam {String} collections Shop CollectionsIds.
 * @apiParam {String} offer Shop Offers.
 * @apiParam {String} brands Shop BrandsIds.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
        {
        "gender": [
            "K",
            "W",
            "M"
        ],
        "collections": [
            "C",
            "A",
            "S"
        ],
        "products": [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        "brands": [
            "121",
            "123",
            "124"
        ],
        "_id": "5d384a21a65bad5c40b33c05",
        "handler": "anuj",
        "name": "anuj cloths",
        "shop_id": 2000,
        "category": 1,
        "state": "11",
        "city": "1001",
        "locallity": "10001",
        "subLocallity": "100001",
        "subSubLocallity": 1000001,
        "latitude": "23.263242",
        "longitude": "77.854353",
        "owner": "anuj",
        "since": 2001,
        "contact": 9072677986,
        "pinCode": 110020,
        "offer": "30%",
        "date": "2019-07-24T12:08:01.638Z",
        "__v": 0
    }
 * 
 */
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
/**
 * @api {post} api/shops Get Shops With Filter
 * @apiName Get Shops List
 * @apiGroup Shop
 *
 * @apiParam {String} state Shop State.
 * @apiParam {String} city Shop City.
 * @apiParam {String} [locallity] Shop Locallity.
 * @apiParam {String} [gender] Gender Filter.
 * @apiParam {Number} [page] Shop listing Page.
 * @apiParam {String} [collectionId] Collection Filter.
 * @apiParam {Number} [brandId] Brand Filter.
 * @apiParam {Number} [productId] Product Filter.
 * @apiParam {String} [offer] Shop Offer Filter.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
        [
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd5eea6fa9e0c61686eb0",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Riwaaz",
                "handler": "_ibk4rj0kk",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Ashok Vihar",
                "subLocallity": "22, Central Market",
                "subSubLocallity": null,
                "pinCode": 110052,
                "latitude": "",
                "longitude": "",
                "owner": "",
                "shopId": "_ibk4rj0kk",
                "mobile": "",
                "landline": "01127242326",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.290Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd5eea6fa9e0c61686ec6",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Arihant Garments",
                "handler": "_8xepd2nmz",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Chandni Chowk",
                "subLocallity": "1055, Kastui  Market",
                "subSubLocallity": null,
                "pinCode": 110006,
                "latitude": "",
                "longitude": "",
                "owner": "",
                "shopId": "_8xepd2nmz",
                "mobile": "09811813640",
                "landline": "",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.294Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd5eea6fa9e0c61686ec9",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Bachpan Garments",
                "handler": "_t0dv7hh64",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Paharganj",
                "subLocallity": "8831, Mutani Dhanda",
                "subSubLocallity": null,
                "pinCode": 110055,
                "latitude": "28.68",
                "longitude": "77.1974",
                "owner": "",
                "shopId": "_t0dv7hh64",
                "mobile": "",
                "landline": "01141704404",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.296Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd07",
                "inner_wear": "Y",
                "type": "",
                "woolen_cloths": "Y",
                "uniform": "Y",
                "boutique": "Y",
                "name": "Jacksons",
                "handler": "_f6oi0k1rh",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Connaught Place",
                "subLocallity": "108-B, Palika Bazaar",
                "subSubLocallity": null,
                "pinCode": 110001,
                "latitude": "28.650618",
                "longitude": "77.23189",
                "owner": "",
                "shopId": "_f6oi0k1rh",
                "mobile": "",
                "landline": "01123327831",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.297Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd0e",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Fever India Limited",
                "handler": "_iuozx39w4",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Karol Bagh",
                "subLocallity": "6111, Dev Nagar, 7",
                "subSubLocallity": null,
                "pinCode": 110005,
                "latitude": "28.62858",
                "longitude": "77.21919",
                "owner": "",
                "shopId": "_iuozx39w4",
                "mobile": "",
                "landline": "01125815731",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.298Z"
            },
            {
                "gender": [
                    "M"
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd1e",
                "inner_wear": "Y",
                "type": [
                    "C"
                ],
                "woolen_cloths": "Y",
                "uniform": "Y",
                "boutique": "Y",
                "name": "Fashion Number One",
                "handler": "_hndq1ezjn",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Karol Bagh",
                "subLocallity": "6254, Street 1",
                "subSubLocallity": null,
                "pinCode": 110005,
                "latitude": "",
                "longitude": "",
                "owner": "",
                "shopId": "_hndq1ezjn",
                "mobile": "",
                "landline": "01125822557",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.300Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd23",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Leela Garments",
                "handler": "_t4u607klo",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Connaught Place",
                "subLocallity": "69, Pallika Bazar",
                "subSubLocallity": null,
                "pinCode": 110001,
                "latitude": "28.655706",
                "longitude": "77.22768",
                "owner": "",
                "shopId": "_t4u607klo",
                "mobile": "",
                "landline": "01123317403",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.302Z"
            },
            {
                "gender": [
                    "K",
                    "B"
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd25",
                "inner_wear": "Y",
                "type": [
                    "F"
                ],
                "woolen_cloths": "Y",
                "uniform": "Y",
                "boutique": "Y",
                "name": "Aggarwal Dresses",
                "handler": "_kmo522lks",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Khari Baoli",
                "subLocallity": "463&464",
                "subSubLocallity": null,
                "pinCode": 110006,
                "latitude": "",
                "longitude": "",
                "owner": "",
                "shopId": "_kmo522lks",
                "mobile": "",
                "landline": "01123951439",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.303Z"
            },
            {
                "gender": [
                    ""
                ],
                "collections": [
                    "C"
                ],
                "products": [],
                "brands": [],
                "_id": "5c9bd60de2d5e10c6befcd35",
                "inner_wear": "N",
                "type": "",
                "woolen_cloths": "N",
                "uniform": "N",
                "boutique": "N",
                "name": "Triple One",
                "handler": "_j9frq9al4",
                "state": "Delhi",
                "city": "Delhi",
                "locallity": "Connaught Place",
                "subLocallity": "111, Palika Bazaar",
                "subSubLocallity": null,
                "pinCode": 110001,
                "latitude": "28.656015",
                "longitude": "77.23254",
                "owner": "",
                "shopId": "_j9frq9al4",
                "mobile": "",
                "landline": "01123361034",
                "since": null,
                "email": "",
                "website": "",
                "date": "2019-07-24T18:12:26.304Z"
            }
        ]
 *
 */
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
