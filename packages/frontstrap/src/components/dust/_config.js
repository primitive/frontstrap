import { Grid } from "./_grid.js";
import { themecolor } from "./_colors.js";
import { randomWord } from "../sand/utils";

const themeconfig = {

        grid: Grid,
        style: {
          body: {
            bg: "white",
            font: {
              size: "1rem",
              family: 'Verdana',
              color: "",
              weight: "300",
              lineheight: ""
            }
          },
        },

        header: {
          variant: "", // "" | "light" | "dark"
          logo: "https://api.primitivedigital.uk/wp-content/uploads/img/punky_logo_smgreen.png",
          alt: "Primitive Digital - Web Design &amp; Development",
          random: randomWord()
        },
        main: {
          bg: "linear-gradient(180deg, rgba(66, 174, 228, 0.1), rgba(66, 174, 228, 0) )",
          bordertop: "3px solid rgba(12,17,43,0.9)",
          borderbottom: ""
        },
        footer: {
          rocks: "",
          bg: "#D4AEA6",
          color: "#87635C",
          image: "https://api.primitivedigital.uk/wp-content/uploads/promo/topbanana1.png",
          title: "Top Banana Web Design and Development",
          fontfamily: "subslab",
          text1: "- Top Banana -",
          text2: "Web Design",
          text3: "&",
          text4: "Development",
          contact: {
            info: "Phone 0113 314 8880",
            prompt: "to make beautiful digital stuff together"
          },
          kudos: {
            alt1: "Primitive Digital - Web Design &amp; Development",
            src1: "https://gist.githubusercontent.com/primitiveshaun/0ed73e662218497565fc4c59464f05db/raw/fa54ac683c60a7576f254daf82225d7c52291b16/pd_primitive.svg",
            alt2: "Highly Recommends",
            src2: "https://gist.githubusercontent.com/primitiveshaun/58b74f472e0f11d9fe202056322f3a83/raw/5055725c1b0f103c9338a99ef7bacfa1013e99af/pd_heartit.svg",
            alt3: "Everything WordPress",
            src3: "https://gist.githubusercontent.com/primitiveshaun/e7370d6c413e04240158e032f8ac06ab/raw/88cbc672a1bcccc1b74007b4dd164bc01844baa7/pd_wordpress.svg",
            alt4: "Plus Frontity the framework for super fast WordPress+React themes",
            src4: "https://gist.githubusercontent.com/primitiveshaun/69d1ac57b037931ea645629fa2bce642/raw/7c36d73c5ce8161a56dfc13deaac5b0e813b4e8a/pd_frontity.svg",
            link: "https://frontity.org/"
          },
          credit: {
            legal: "sknow.it ltd.",
            link: "https://sknow.it",
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
            title: "Some Recent Projects",
            subtitle: "We Made This.",
            icon: ""
          },
          bronzeConfig: {
            rocks: "page-home-bronze",
            show: 2,
            title1: "We Make Websites",
            imageFrame1: "fancy-frame",
            imagesrc1: "https://api.primitivedigital.uk/wp-content/uploads/promo/wantawebsite_square.jpg",
            listFrame1: "frame",
            list1: ["Web Sites, CMS, CRM and Blogs.", "Fully Editable Content.", "Online shops and Progressive Web Apps.", "API's and application integration", "Mobile friendly and responsive", "Google Analytics", "High tech, low cost, no hassle", "Excellence as standard & satisfaction guaranteed"],
            link1: "/web-design/",
            icon1: "",
            title2: "We Love Startups",
            imageFrame2: "fancy-frame",
            imagesrc2: "https://api.primitivedigital.uk/wp-content/uploads/promo/selfiemonkey_square.jpg",
            listFrame2: "frame",
            list2: ["Get a custom built Website", "Professionally designed and branded", "Plus Logo design", "Plus business card design", "Easy, peasy chimpanzizi!"],
            link2: "/darwin-project/",
            icon2: ""
          }
        },

        tabs: {
          variant: "",
          bgcolor: "",
          one: {
            bgimg: "https://api.primitivedigital.uk/wp-content/uploads/m/monkey-happy.jpg",
            title1: "Web Design",
            text1: "Find your audience",
            title2: "App &amp; UI Design",
            text2: "And connect with your users",
            title3: "Brand &amp; Logo Design",
            text3: "In creative, beautiful and consistent ways",
            title4: "Print Design",
            text4: "Across all platforms"
          },
          two: {
            bgimg: "https://api.primitivedigital.uk/wp-content/uploads/m/monkey-eh.jpg",
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
            bgimg: "https://api.primitivedigital.uk/wp-content/uploads/m/monkey-ooh.jpg",
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
            bgimg: "https://api.primitivedigital.uk/wp-content/uploads/m/monkey-smile.jpg",
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
          pretext: "Business / Enterprise",
          text: "Primitive provides people-friendly, packages only. ",
          link: "https://sknow.it/bookings"
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
              style: "border:none;overflow:hidden;",
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
            github: "https://github.com/primitiveshaun",
            behance: "https://www.behance.net/primitiveshaun/"
          }
        }

      }
export { themeconfig };