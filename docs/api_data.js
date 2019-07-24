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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"_id\": \"5d38434f1945314d77000318\",\n      \"shop_id\": 2001,\n      \"products\": [\n          {\n              \"_id\": \"5d38434f1945314d77000319\",\n              \"brandId\": 120,\n              \"brandName\": \"NIKE\",\n              \"product\": [\n                  {\n                      \"sizes\": [\n                          \"7\",\n                          \"8\",\n                          \"9\"\n                      ],\n                      \"gender\": [\n                          \"F\"\n                      ],\n                      \"_id\": \"5d38434f1945314d7700031a\",\n                      \"Id\": 3,\n                      \"name\": \"Shoes\",\n                      \"offer\": \"30%\"\n                  }\n              ]\n          }\n      ],\n      \"date\": \"2019-07-24T11:38:55.151Z\",\n      \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "api/products/:shopId",
    "title": "Get Shop Products ByShopId",
    "name": "Get_Shop_Catalog",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"_id\": \"5ca875f0f5cba30268bd5f1e\",\n       \"shop_id\": 201,\n       \"products\": [\n           {\n               \"product\": [\n                   {\n                       \"sizes\": [\n                           \"6\",\n                           \"7\",\n                           \"8\"\n                       ],\n                       \"gender\": [\n                           \"F\",\n                           \"M\"\n                       ],\n                       \"_id\": \"5ca876ccf5cba30268bd5f25\",\n                       \"Id\": 6,\n                       \"name\": \"Shoes\",\n                       \"offer\": \"30%\"\n                   }\n               ],\n               \"_id\": \"5ca876ccf5cba30268bd5f24\",\n               \"brandId\": 123,\n               \"brandName\": \"Puma\"\n           },\n           {\n               \"product\": [\n                   {\n                       \"sizes\": [\n                           \"6\",\n                           \"7\",\n                           \"8\"\n                       ],\n                       \"gender\": [\n                           \"F\",\n                           \"M\"\n                       ],\n                       \"_id\": \"5ca87673f5cba30268bd5f23\",\n                       \"Id\": 5,\n                       \"name\": \"Shoes\",\n                       \"offer\": \"30%\"\n                   }\n               ],\n               \"_id\": \"5ca87673f5cba30268bd5f22\",\n               \"brandId\": 122,\n               \"brandName\": \"NIKE\"\n           },\n           {\n               \"product\": [\n                   {\n                       \"sizes\": [\n                           \"32\",\n                           \"20\",\n                           \"36\"\n                       ],\n                       \"gender\": [\n                           \"F\",\n                           \"M\"\n                       ],\n                       \"_id\": \"5ca87635f5cba30268bd5f21\",\n                       \"Id\": 4,\n                       \"name\": \"Jeans\",\n                       \"offer\": \"30%\"\n                   },\n                   {\n                       \"sizes\": [\n                           \"32\",\n                           \"20\",\n                           \"36\"\n                       ],\n                       \"gender\": [\n                           \"F\",\n                           \"M\"\n                       ],\n                       \"_id\": \"5ca875f0f5cba30268bd5f20\",\n                       \"Id\": 3,\n                       \"name\": \"Shirts\",\n                       \"offer\": \"30%\"\n                   }\n               ],\n               \"_id\": \"5ca875f0f5cba30268bd5f1f\",\n               \"brandId\": 121,\n               \"brandName\": \"PE\"\n           }\n       ],\n       \"date\": \"2019-04-06T09:48:32.158Z\",\n       \"__v\": 4\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "api/shops/addshop",
    "title": "Add & Edit Shop Info",
    "name": "AddEditShopInfo",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shop Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "handler",
            "description": "<p>Unique Shop Handler.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Shop's Product Categories.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Shop State.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Shop City.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Shop",
            "description": "<p>City Shop Locallity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subLocallity",
            "description": "<p>Shop Sublocallity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subSubLocallity",
            "description": "<p>Shop subSubLocallity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>Shop latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>Shop longitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Shop Owner Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": "<p>Unique Shoip Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>Shop Contact Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "since",
            "description": "<p>Shop Since.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pinCode",
            "description": "<p>Shop Area PinCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender Availability.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collections",
            "description": "<p>Shop CollectionsIds.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer",
            "description": "<p>Shop Offers.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brands",
            "description": "<p>Shop BrandsIds.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n    \"gender\": [\n        \"K\",\n        \"W\",\n        \"M\"\n    ],\n    \"collections\": [\n        \"C\",\n        \"A\",\n        \"S\"\n    ],\n    \"products\": [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\",\n        \"5\"\n    ],\n    \"brands\": [\n        \"121\",\n        \"123\",\n        \"124\"\n    ],\n    \"_id\": \"5d384a21a65bad5c40b33c05\",\n    \"handler\": \"anuj\",\n    \"name\": \"anuj cloths\",\n    \"shop_id\": 2000,\n    \"category\": 1,\n    \"state\": \"11\",\n    \"city\": \"1001\",\n    \"locallity\": \"10001\",\n    \"subLocallity\": \"100001\",\n    \"subSubLocallity\": 1000001,\n    \"latitude\": \"23.263242\",\n    \"longitude\": \"77.854353\",\n    \"owner\": \"anuj\",\n    \"since\": 2001,\n    \"contact\": 9072677986,\n    \"pinCode\": 110020,\n    \"offer\": \"30%\",\n    \"date\": \"2019-07-24T12:08:01.638Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/shops.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "api/shops",
    "title": "Get Shops With Filter",
    "name": "Get_Shops_List",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Shop State.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Shop City.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "locallity",
            "description": "<p>Shop Locallity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Gender Filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Shop listing Page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "collectionId",
            "description": "<p>Collection Filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brandId",
            "description": "<p>Brand Filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>Product Filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "offer",
            "description": "<p>Shop Offer Filter.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/shops.js",
    "groupTitle": "Shop"
  }
] });
