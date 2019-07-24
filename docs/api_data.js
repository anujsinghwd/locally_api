define({ "api": [
  {
    "type": "post",
    "url": "api/products",
    "title": "Add & Update Products",
    "name": "AddUpdateProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>Unique Shop Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Product's Brand Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barndId",
            "description": "<p>Product's Brand Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Product's Unique Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer",
            "description": "<p>Offer On that Specific Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizes",
            "description": "<p>Product's size availability.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Product's gender availability.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Prodct",
            "description": "<p>Json Object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "api/products/shopId/:shopId",
    "title": "Get Shops ById",
    "name": "Get_Shops",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>Unique Shop Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Shop",
            "description": "<p>Json Object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/products.js",
    "groupTitle": "Products"
  }
] });
