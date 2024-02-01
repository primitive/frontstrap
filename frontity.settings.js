const settings = {
  name: "frontstrap",
  state: {
    frontity: {
      url: "https://primitivedigital.uk",
      title: "Primitive Digital",
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
            ["Design", "/web-design"],
            ["Development", "/web-development"],
            ["Data", "/data-insights"],
            ["Marketing", "/marketing"],
            ["Contact", "/contact"],
            ["A Nice Log", "/blog"]
          ],
          menufooter: [
            ["Contact", "/contact"],
            ["Startup Offers", "/darwin-project"],
            ["Adventures in Time", "/timelines"],
            ["Cave of Wonders", "/cave"],
            ["Frontstrap Theme (retired)", "https://www.npmjs.com/package/frontstrap"],
            ["Boring Legal Stuff", "privacy-policy"]
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
          prodfonts: "https://use.typekit.net/jcg4rrq.css",
          fonts: "https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Pacifico|Playfair+Display:700|Slabo+27px&display=swap"
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingIds: ["G-DTBHP6R7KL"]
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://primitivedigital.uk/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
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
