const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Load Products Model
const Product = require('../../models/Products');


/**
 * @api {post} api/products Add & Update Products
 * @apiName AddUpdateProducts
 * @apiGroup Products
 *
 * @apiParam {String} shop_id Unique Shop Id.
 * @apiParam {String} brandName Product's Brand Name.
 * @apiParam {String} barndId Product's Brand Id.
 * @apiParam {String} barndId Product's Brand Id.
 * @apiParam {String} productId Product's Unique Id.
 * @apiParam {String} productName Product Name.
 * @apiParam {String} offer Offer On that Specific Product.
 * @apiParam {String} sizes Product's size availability.
 * @apiParam {String} gender Product's gender availability.
 *
 * @apiSuccess {Json} Prodct Json Object.
 */
router.post('/',(req, res) => {
    const productFields = {};
    const products = {};
    const product = {};
    if(req.body.shop_id) productFields.shop_id = req.body.shop_id;
    if(req.body.brandId) products.brandId = req.body.brandId;
    if(req.body.brandName) products.brandName = req.body.brandName;

    // sizes split into array
    if(typeof req.body.sizes !== 'undefined'){
        product.sizes = req.body.sizes.split(',');
    }

    // gender split into array
    if(typeof req.body.gender !== 'undefined'){
        product.gender = req.body.gender.split(',');
    }

    if(req.body.productId) product.Id = req.body.productId;
    if(req.body.productName) product.name = req.body.productName;
    if(req.body.offer) product.offer = req.body.offer;
    products.product = product;
    productFields.products = products;

    // Check ShopId Exists Or Not
    Product.findOne({shop_id: req.body.shop_id})
            .then(catalogs => {
                if(catalogs){
                    // Check Brand Exists Or Not
                    let brandExists = catalogs.products.filter((product) => product.brandId === parseInt(req.body.brandId));
                    if(brandExists.length === 0)
                    {
                        // Add New Brand to Products Array
                        catalogs.products.unshift(products);
                        catalogs.save().then(catalog => res.json(catalog));
                    }
                    else
                    {
                        // Check product Exists or Not
                        let productExist = brandExists[0].product.filter((prod) => prod.Id === parseInt(req.body.productId));
                        let BrandIdx = catalogs.products.map(product => product.brandId.toString()).indexOf(req.body.brandId);
                        if(productExist.length === 0)
                        {
                            catalogs.products[BrandIdx].product.unshift(product);
                            catalogs.save().then(catalog => res.json(catalog));
                        }
                        else
                        {
                            let ProductIdx = catalogs.products[BrandIdx].product.map(item => item.Id.toString()).indexOf(req.body.productId);
                            catalogs.products[BrandIdx].product[ProductIdx].offer = req.body.offer;
                            if(req.body.gender)
                            {
                                catalogs.products[BrandIdx].product[ProductIdx].gender = product.gender;
                            }
                            if(req.body.sizes)
                            {
                                catalogs.products[BrandIdx].product[ProductIdx].sizes = product.sizes;
                            }
                            catalogs.save().then(catalog => res.json(catalog));
                        }
                    }
                }
                else
                {
                    // Save New
                    new Product(productFields).save().then(result => res.json(result));
                }
            })
});


/**
 * @api {get} api/catalogs/:shopId Get Shop Catalog ById
 * @apiName Get Shop Catalog
 * @apiGroup Products
 *
 * @apiParam {String} shop_id Unique Shop Id.
 *
 * @apiSuccess {Json} Shop Json Object.
 */
router.get('/:shopId', (req, res) => {
    Product.findOne({shop_id: req.params.shopId})
            .then(catalogs => {
                if(catalogs){
                    res.json(catalogs);
                }
                else
                {
                    res.status(404).json({'noshop': 'no shops found'});
                }
            })
            .catch(err => res.status(400).json(err));
});

module.exports = router;
