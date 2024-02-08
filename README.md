# Frontstrap Frontity Theme
![Primitive Digital](https://github.com/primitive/frontstrap/blob/main/docs/pd-quantum-wordpress.png?raw=true)

<hr>
<div align="center">
  <a href="https://github.com/primitive/frontstrap">
    <img src="https://raw.githubusercontent.com/primitive/frontstrap/bd64357bfa6184586bdf313de10238598448ad6f/docs/primitive.svg" alt="Primitive" width="160" height="80">
  </a>

  <h2 align="center">Frontstrap Theme</h2>

  <h3 align="center">Primitive's Rolling Mountains | ❦ ☞ Beautiful Views</h3>

  <p align="center">
    A starter theme for Headless-WordPress deployments with Frontity.
    <br />
    <a href="https://docs.frontity.org/installation-and-deploy"><strong>Frontity is not longer maintained and is being sunsetted as our framework. Not recommneded for use in production. »</strong></a>
    <br>
    <br>
    <a href="https://primitivedigital.uk/?utm_source=npm-frontstrap&utm_medium=readme">View Demo</a>
    ·
    <a href="https://github.com/primitive/frontstrap/issues">Report Bug</a>
    ·
    <a href="https://github.com/primitive/frontstrap/issues">Request Feature</a>
  </p>
  <p align="center">
    Built on the awesome, itty bitty, <a href="https://frontity.org/">Frontity</a> framework. With little help from our friends: <a href="https://getbootstrap.com/">Bootstrap</a>, <a href="https://greensock.com/gsap/">GSAP</a> and <a href="https://scrollmagic.io/">ScrollMagic</a>. 
    <br>
    Made by <a href="https://primitivedigital.uk/?utm_source=npm-frontstrap&utm_medium=readme">Monkies</a>  ☙ ❦ 🐒 - 🐒 - 🐒 ❦ ❧<br>
    & crafted with ❤️ 🍌 ❤️ <br>
  </p>
</div>
<hr>


## About The Project
This was created as an early experiment using Frontity as a headless CMS for WordPress. It was a great learning experience but the project got mothballed during Covid. We decided to fix a few issues with the existing deployment but are moving to an alternative approach for headless deployments.

**Primitive Digital's Live Site 👉  [Primitive Digital](https://primitivedigital.uk/?utm_source=npm-frontstrap&utm_medium=readme)**

GitHub 👉  [@primitive/frontstrap](https://github.com/primitive/frontstrap)  

Theme NPM package ~  👉  [frontstrap (v1.0.x)](https://www.npmjs.com/package/frontstrap)

Rocks NPM package 🎉  ~  👉  [@primitive/rocks (v1.0.x)](https://github.com/primitive/frontstrap/packages/1210833)  
Pebbles NPM package 🎉  ~  👉  [@primitive/pebbles (v1.0.x)](https://github.com/primitive/frontstrap/packages/1210829)  
Scenes NPM package 🎉  ~  👉  [@primitive/scenes (v1.0.x)](https://github.com/primitive/frontstrap/packages/1210812)  




### Prerequisites
-------------------------------

**The following pre-requisites should be in place for the theme to work:**
1. WordPress install of version 5.0 or later
2. Optional but highly recommended: register a domain
3. If deploying to Vercel install WordPress to a sub directory e.g. - wp.example.com
4. Posts permalink set set to: Custom Structure e.g. - `/posts/%postname%/`
5. Set homepage to a static page
6. Some features may require the use of the [Advanced Custom Fields](https://www.advancedcustomfields.com/) plugin


### Installation & Development
-------------------------------

*** Follow the Frontity setup outlined in their [Docs](https://docs.frontity.org/getting-started/quick-start-guide) ***

**To use this theme**
You can install the theme and packages from the NPM/Github registry. You will need to extract the frontstrap package to edit 'src/components/dust/_config' and copy frontity.settings.js to the root of your project.

The simpler option is to clone the demo repo:

1. `git clone https://github.com/primitive/frontstrap`
2. `cd frontstrap`
3. `npm install && npx frontity dev (from the project's root directory)`

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.


### Deployment
------------------------------------

*** Follow the Frontity deployment outlined in their [Docs](https://docs.frontity.org/installation-and-deploy) ***

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.



#### Ω - *the end*

 ☙ 🐒 ❦ 🐒 ❦ 🐒 ❧
<pre>                                                                               
 _____       _        _                        _               
|     |___ _| |___   | |_ _ _    _____ ___ ___| |_ ___ _ _ ___ 
| | | | .'| . | -_|  | . | | |  |     | . |   | '_| -_| | |_ -|
|_|_|_|__,|___|___|  |___|_  |  |_|_|_|___|_|_|_,_|___|_  |___|
                         |___|                        |___|    
</pre>
> [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

---

🃏 This code is opensource so play like you mean business 🤓

#### [Crafted by Primitive Digital](https://primitivedigital.uk/?utm_source=npm-frontstrap&utm_medium=readme)

![](https://primitivedigital.uk/wp-content/uploads/img/haveyouseenit.jpg)




### A quiet little corner where a Developer can go sit, scowel a bit, grumble a bit and think about what you've done...


**Frontity currently supports Node >= 16.**
Node 17+ uses [OpenSSL 3](https://nodejs.org/ca/blog/vulnerability/openssl-november-2022/). 
- [error:0308010C:digital envelope routines::unsupported"](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- [Openssl Enable Legacy Renegotiation](https://pipeawk.com/index.php/2022/05/19/openssl-enable-legacy-renegotiation/)
- [node: --openssl-legacy-provider is not allowed in NODE_OPTIONS](https://bobbyhadz.com/blog/node-openssl-legacy-provider-is-not-allowed-in-node-options)

Possible workaround

```
export NODE_OPTIONS=--openssl-legacy-provider
```

```
{
  "dependencies": {
    "local": {
      "frontstrap": "./packages/frontstrap",
      "@primitive/pebbles": "./packages/pebbles",
      "@primitive/rocks": "./packages/rocks",
      "@primitive/scenes": "./packages/scenes"
    },
    "published": {
      "frontstrap": "^0.0.11",
      "@primitive/pebbles": "^0.0.8",
      "@primitive/rocks": "^0.0.10",
      "@primitive/scenes": "^0.0.7"
    }
  }
}
```

**Frontstrap V0.x Deployment:**
- deployed to wordpress with frontity embedded mode plugin
- frontity hosted on VPS
- framework no longer maintained + is resource intensive/memory hungry. To be replaced with an alternate framework.

## TO REVIEW + MIGRATE USEFUL BITS
- [x] test issues with node 18 (kinda works)
- [x] frontity.settings is dominant over package/index
- [x] BS emotion warnings
- [x] WebFonts: Tested as per docs. Implementation works but some google fonts don't convert well
- [x] TBC. Some Google Fonts gets messed up converting to .woff/.woff2
- [x] FIX: menu collapse / routing
- [x] FIX: preloading
- [ ] Refine: Optimise for Mobile: Don't serve some animations on mobile, handle click/hover
- [ ] FIX or FEAT: author list view / profile
- [x] Split primitiverocks package
- [x] Split primitivescenes package
- [x] Split theme / dev staging
- [ ] Add: [react-spring](https://www.react-spring.io/)
- [ ] Add: [react-use-gesture](https://use-gesture.netlify.app/)
- [ ] Add: [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [x] [SEO: Add Site maps](https://community.frontity.org/t/xml-sitemaps-landing-in-wordpress-core/1153)
- [x] [SEO: Frontity Blog](https://frontity.org/blog/seo-for-headless-wordpress-themes/)
- [ ] [Theme: WP Theme Bridge](https://community.frontity.org/t/theme-bridge/1432/12)
- [ ] FEAT: Fade in lazy loaded images?
- [ ] sort/filters: modify the wp theme funtions.php or use a plugin?
- [ ] sort/filters subtimeline component: custom cpt/taxonomy content (I can't seem to sort if using WP REST Filter plugin)
- [ ] sort/filters poststrip component: post and custom cpt/taxonomy content (recent, random, related)
- [ ] Research conditional loading of UI cores + theme
- [ ] Set base CSS to use none/twentytwenty/bootstrap (grid, classes, --modifiers-size/transparency/darken/lighten)
- [ ] Create *shoelace* theme (grid, size, color, breakpoints) + fragments
- [ ] Research create a UI/cf7 theme builder vs cli
- [ ] Research add comments / cf7 / fe content submission
- [ ] Add post social share
- [ ] Q: useEffect vs self-invoking
- [ ] Q: imports / conditional / slots?  


- [x] Claim primitive org on NPM 🙅 not accepted
- [x] Claim primitive org on Github ✅
- [x] Publish to npm (@primitive/rocks) ✅
- [x] Publish to npm (frontstrap) ✅
- [x] Publish to npm (primitiverocks)
- [x] Publish to npm (primitivescenes)

- [x] Publish to npm (primitiveone-theme)
- [x] Publish to npm (primitiveone)
- [ ] Impliment CI/CD


Logs are somewhat of a rant. Packages created I was experimenting with different approaches and trying to get my head around the framework plus testing some capabilities of modern CSS specs vs CSS-IN-JS.