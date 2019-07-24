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
    "url": "api/addshop",
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
    "filename": "routes/api/shops.js",
    "groupTitle": "Shop"
  }
] });
