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
            ["Content", "/frontity-tests"],
            ["Pages", "/web-design"],
            ["Post", "/blog/a-decade-of-digital-development"],
            ["Posts", "/blog"],
            ["CPTs", "/evolution-of-digital-stuff"],
            ["CTs", "/timelines"],
            ["Stats/config", "/stats"],
          ],
          "menufooter": [
            ["Contact", "/contact"],
            ["Startups", "/darwin-project"],
            ["Adventures in Time", "/timelines"],
            ["Cave of ", "/cave"],
            ["Primitive Theme for Frontity", "https://www.npmjs.com/package/primitive-theme"],
            ["Privacy Policy", "privacy-policy"]
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
