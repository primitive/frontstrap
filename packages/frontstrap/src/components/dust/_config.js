import { Grid } from "./_grid.js";
import { themecolor } from "./_colors.js";
import { randomWord } from "../sand/utils";

const themeconfig = {

        grid: Grid,
        style: {
          body: {
            bg: "#fffefe",
            font: {
              size: "1rem",
              family: 'var(--bs-body-font-family)',
              color: "",
              weight: "300",
              lineheight: "1.5",
            }
          },
          fontFamily: {
            sans: "Helvetica,Helvetica Neue,Arial,sans-serif",
            sansCond: "'Amatic SC',sans-serif",
            serif: "'Slabo 27px',Georgia,serif",
            display: "Abril Fatface",
            news: "'Playfair Display',Georgia,serif",
            book: "Baskerville,Georgia,serif",
            brush: "'Pacifico',cursive",
            script: "'Pacifico',cursive"
          }
        },

        header: {
          variant: "", //supports: "" | "light" | "dark"
          logo: "https://primitivedigital.uk/wp-content/uploads/img/pd-logo-greendark-duo.png",
          alt: "Primitive Digital - Design &amp; Development",
          link: "/contact/",
          random: randomWord("Fabulous,Fruity,Fast,Awesome,Marvelous")
        },

        main: {
          bg: "linear-gradient(180deg, rgba(66, 174, 228, 0.1), rgba(66, 174, 228, 0) )",
          bordertop: "3px solid rgba(12,17,43,0.9)",
          borderbottom: ""
        },
        
        footer: {
          rocks: "",
          bg1: "#D4AEA6",
          bg2: "#87635C",
          bg3: "#87635C",
          bg: "#D4AEA6",
          color1: "#87635C",
          color2: "#87635C",
          color3: "#D4AEA6",
          color: "#87635C",
          image: "https://primitivedigital.uk/wp-content/uploads/promo/topbanana1.png",
          title: "Top Banana Web Design and Development",
          fontfamily: "subslab",
          text1: "- Top Banana -",
          text2: "Web Design",
          text3: "&",
          text4: "Development",
          contact: {
            prompt: "Don't Delay, Call Today!",
            info: "0113 314 8880",
            incentive: "to make beautiful things together"
          },

          kudos: {
            alt1: "Built with Love",
            src1: "https://gist.githubusercontent.com/primitiveshaun/58b74f472e0f11d9fe202056322f3a83/raw/5055725c1b0f103c9338a99ef7bacfa1013e99af/pd_heartit.svg",
            alt2: "Primitive Digital - Web Design &amp; Development",
            src2: "https://gist.githubusercontent.com/primitiveshaun/0ed73e662218497565fc4c59464f05db/raw/fa54ac683c60a7576f254daf82225d7c52291b16/pd_primitive.svg",
            alt3: "Everything WordPress",
            src3: "https://gist.githubusercontent.com/primitiveshaun/e7370d6c413e04240158e032f8ac06ab/raw/88cbc672a1bcccc1b74007b4dd164bc01844baa7/pd_wordpress.svg",
            link: ""
          },

          credit: {
            legal: "Primitive Digital",
            link: "https://primitivedigital.uk",
            label: "Website crafted by ",
            creator: "Primitive Digital",
            backlink: "https://primitivedigital.uk"
          }
        },

        page: {
          showBanner: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          template: false
        },
        homepage: {
          showHero: true,
          showIntro: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          showBrass: true,
          showBanner: false,

          hero: {
            rocks: "scenes",
            scene: "jungle",
            fluid: "true"
          },
          intro: {
            rocks: "typography"
          },
          gold: {
            rocks: "tabs"
          },
          silver: {
            rocks: "poststrip",
            posttype: "works",
            mode: "random",
            limit: 3,
            title: "Past Projects",
            subtitle: "We Made This.",
            icon: ""
          },
          bronzeConfig: {
            rocks: "page-home-bronze",
            show: 2,
            title1: "We Make Websites",
            imageFrame1: "fancy-frame",
            imagesrc1: "https://primitivedigital.uk/wp-content/uploads/promo/wantawebsite_square.jpg",
            listFrame1: "frame",
            list1: ["Web Sites, Online Shops & Apps", "CMS, KMS, LMS, API's & Integrations", "Fully Editable & Mobile Friendly", "Search Engine Optimised", "High tech, low cost, no hassle"],
            close1: "When it'll do, just won't do we're the ones for you. Excellence comes as standard.",
            link1: "/web-design/",
            icon1: "",
            title2: "Startups & MVPs",
            imageFrame2: "fancy-frame",
            imagesrc2: "https://primitivedigital.uk/wp-content/uploads/promo/selfiemonkey_square.jpg",
            listFrame2: "frame",
            list2: ["Bespoke Websites & Apps", "Professionally designed and branded", "With Logo design", "Plus all marketing assets", "Easy, peasy chimpanzizi!"],
            close2: "We make websites & apps that work for you, your business and your customers.",
            link2: "/darwin-project/",
            icon2: ""
          }
        },
        tabs: {
          variant: "",
          bgcolor: "",
          one: {
            bgimg: "https://primitivedigital.uk/wp-content/uploads/m/monkey-happy.jpg",
            title1: "Web Design",
            text1: "Find your audience",
            title2: "App &amp; UI Design",
            text2: "Connect with your users",
            title3: "Brand &amp; Logo Design",
            text3: "In creative, beautiful & consistent ways",
            title4: "Print Design",
            text4: "Across all platforms"
          },
          two: {
            bgimg: "https://primitivedigital.uk/wp-content/uploads/m/monkey-eh.jpg",
            title1: "Rapid Web Development",
            text1: "Get online fast",
            title2: "Application Development",
            text2: "Meet the needs of your users",
            title3: "WordPress CMS",
            text3: "Built on the most popular core",
            title4: "REST API + CPT",
            text4: "The possibilities are endless"
          },
          three: {
            bgimg: "https://primitivedigital.uk/wp-content/uploads/m/monkey-ooh.jpg",
            title1: "Analytics and Reporting",
            text1: "Infomation is beautiful",
            title2: "Search Engine Optimisation",
            text2: "Especially climbing the ranks",
            title3: "Data Visualisation",
            text3: "So make communication a simple joy",
            title4: "Testing and Research",
            text4: "But you can always A/B better"
          },
          four: {
            bgimg: "https://primitivedigital.uk/wp-content/uploads/m/monkey-smile.jpg",
            title1: "Social Media",
            text1: "Graphics, Banners and Promos",
            title2: "eMail &amp; eCommerce",
            text2: "To Sell, sell, sell",
            title3: "Strategy &amp; Campaigns",
            text3: "And do it well, well, well",
            title4: "Triggers &amp; Automation",
            text4: "With robots and magic buttons"
          }
        },

        globalPromo: true,
        promo: {
          rocks: "global-promo",
          type: "text",
          pretext: "SuperGreen Eco Hosting",
          text: "Be a better business. Leave no carbon footprints with our green WordPress hosting. Click here to order now.",
          link: "https://primitivehosting.uk/store/wordpress-hosting"
        },

        showSocial: true,
        social: {
          bg: "#fffff0",
          color: themecolor.coal,
          instagram: {
            type: "none", // "none" | "posts" | "feed"
            url: "https://www.instagram.com/primitivedigital/",
            postids: ["B9HhnSSj5NX", "B9JXQ7WDpll"],
            maxwidth: 320
          },
          facebook: {
            type: "like", // "none" | "page" | "like" | "feed"
            url: "https://www.facebook.com/primitivedigital",
            settings: {
              src: "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fprimitivedigital&width=150&layout=button_count&action=like&size=large&share=true&height=46&appId=2317056035225898",
              width: "150",
              height: "46",
              style: {},
              // style: "border:none;overflow:hidden;",
              // style: {border:'none', overflow:'hidden'},
              scrolling: "no",
              frameborder: "0",
              allowTransparency: "true",
              allow: "encrypted-media"
            }
          }, 
          twitter: {
            type: "none",
            url: "https://twitter.com/primitivestuff"
          },
          pinterest: {
            type: "none"
          },
          profiles: {
            instagram: "https://www.instagram.com/primitivedigital/",
            facebook: "https://www.facebook.com/primitivedigital",
            twitter: "https://twitter.com/primitivestuff",
            github: "https://github.com/primitive",
            behance: "https://www.behance.net/primitiveshaun/"
          }
        }

      }
export { themeconfig };