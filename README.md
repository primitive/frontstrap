# frontstrap

Bootstrap starter theme for [Frontity](https://frontity.org/) based Headless WordPress.

**N.B.:**
Prepping for a new project.
Frontity will be deprecated in favour of a new framework.
This repo will be archived and the theme will be re-released as a new package.

#### Table of Contents

- [Primitive](#primitive)
- [Development](#development)
- [Customise the theme](#customise)
- [Create a production-ready build](#create-a-production-ready-build)
- [Deploy](#deploy)

### Primitive

Primitive's Rolling Mountains (Beautiful Views)




**Frontity Framework is not under active development anymore. Frontity currently supports Node >= 16.**
Node 17+ uses [OpenSSL 3](https://nodejs.org/ca/blog/vulnerability/openssl-november-2022/). 
- [error:0308010C:digital envelope routines::unsupported"](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- [Openssl Enable Legacy Renegotiation](https://pipeawk.com/index.php/2022/05/19/openssl-enable-legacy-renegotiation/)
- [node: --openssl-legacy-provider is not allowed in NODE_OPTIONS](https://bobbyhadz.com/blog/node-openssl-legacy-provider-is-not-allowed-in-node-options)

Dev. env workaround

```
export NODE_OPTIONS=--openssl-legacy-provider
```

This issue will be fixed in node v18.


### Development


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
      "frontstrap": "^0.0.9",
      "@primitive/pebbles": "^0.0.7",
      "@primitive/rocks": "^0.0.10",
      "@primitive/scenes": "^0.0.7"
    }
  }
}
```

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Create your custom theme

```
npx frontity create-package your-custom-theme
```

Use the command `npx frontity create-package` to create a new package that can be set in your `frontity.settings.js` as your theme

> Have a look at our blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project


### » Frontity Quicklinks
[Keep Frontity Updated](https://gitbook-docs.frontity.org/guides/keep-frontity-updated)


---

### » Frontity Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

- 📖 **[Docs](https://docs.frontity.org)**: this is the place to learn how to build amazing sites with Frontity.
- 👨‍👩‍👧‍👦 **[Community](https://community.frontity.org/)**: use our forum to [ask any questions](https://community.frontity.org/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Frontity](https://community.frontity.org/c/showcases)!
- 🐞 **[GitHub](https://github.com/frontity/frontity)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.frontity.org/)!
- 🗣 **Social media**: a more informal place to interact with Frontity users, reach out to us on [Twitter](https://twitter.com/frontity).
- 💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://frontity.org/)

### » Get involved 🤗

Got questions or feedback about Frontity? We'd love to hear from you. Use our [community forum](https://community.frontity.org) yo ! ❤️

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute)
