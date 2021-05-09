const settings = {
  "name": "frontstrap",
  "state": {
    "frontity": {
      "url": "https://primitivedigital.uk",
      "title": "Primitive Digital",
      "description": "WordPress + Frontity Stuff"
    }
  },
  "packages": [
    {
      "name": "@primitive/frontstrap",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.primitivedigital.uk"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
