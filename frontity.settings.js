const settings = {
  name: "frontstrap",
  state: {
    frontity: {
      url: "https://primitivedigital.uk",
      title: "Primitive Frontstrap Demo",
      description: "Frontstrap Theme",
      tagline: "Websites & Apps",
      phrase1: "We Make",
      phrase2: ""
    }
  },
  packages: [
    {
      name: "frontstrap",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Page", "/web-design"],
            ["Post", "/blog/a-decade-of-digital-development"],
            ["Posts", "/blog"],
            ["Contact", "/contact"],

          ],
          menufooter: [
            ["Frontstrap Theme (sunsetting)", "https://www.npmjs.com/package/frontstrap"],
            ["WIP CPTs", "/evolution-of-digital-stuff"],
            ["WIP CTs", "/timelines"],
            ["Adventures in Time", "/timelines"],
            ["Dev Notes", "/cave"],
            ["Stats/config", "/stats"],
            ["Content Test", "/frontity-tests"],
            ["Privacy Policy", "privacy-policy"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
            showOnPage: true,
          },
          archive: {
            showExcerpt: true
          },
          debug: false,
          canonical: "https://primitivedigital.uk",
          fonts: "https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Pacifico|Playfair+Display:700|Slabo+27px&display=swap"
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingIds: [""]
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://primitivedigital.uk/wp-json/", // required: Your WP REST API EndPoint (cf7 package requires trailing slash)
          homepage: "/home", // optional: set when using a page as the site homepage (wp hp settings ignored)
          postsPage: "/blog", // optional: set when using a page as the site homepage

          // optional: define CPTs
          postTypes: [
            {
              type: "works", // custom post type slug
              endpoint: "works", // WP REST API endpoint
              archive: "/works" // router link: do i do i need this if not diplying the list!?
            },
            {
              type: "temporal_events", // custom post type slug
              endpoint: "temporal_events", // WP REST API endpoint
              archive: "/evolution-of-digital-stuff" // router link: list view of these custom post types
            },
            {
              type: "things", // custom post type slug
              endpoint: "things", // WP REST API endpoint
              archive: "/things" // router link: list view of these custom post types
            }
          ],
          taxonomies: [
            {
              taxonomy: "timelines", // custom taxonomy slug
              endpoint: "timelines", // WP REST API endpoint
              postTypeEndpoint: "/temporal_events" // endpoint for (custom) post types to query
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
