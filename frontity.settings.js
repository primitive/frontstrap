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
      "name": "frontstrap",
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
            "showOnPost": false,
            "showOnPage": true
          },
          // tbc
          "archive": {
            "showExcerpt": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.primitivedigital.uk",

          "homepage": "/home", // optional: set if using a page as homepage (wp hp settings ignored)
          "postsPage": "/blog", // optional: set if using a custom blog page

          // optional: CPTs
          "postTypes": [
            {
              "type": "works", // slug
              "endpoint": "works", // WP-REST endpoint
              "archive": "/works" // router link: do i need this if not diplying the list!?
            },
            {
              "type": "temporal_events",
              "endpoint": "temporal_events",
              "archive": "/evolution-of-digital-stuff" // list view of the CPT
            },
            {
              "type": "things",
              "endpoint": "things",
              "archive": "/things"
            }
          ],

          "taxonomies": [
            {
              "taxonomy": "timelines",
              "endpoint": "timelines",
              "postTypeEndpoint": "/temporal_events",
            }
          ]

        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/google-analytics",
    "@frontity/yoast"
  ]
};

export default settings;
