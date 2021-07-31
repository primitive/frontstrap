import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

import wpBlockColumns from "./processors/wp-block-columns";
import form from "./processors/wpcf7";
import quoteBook from "./processors/blockquote-book";
import listDisco from "./processors/ul-discolist";

//import pQuote from "./processors/q-primary";
//import sQuote from "./processors/q-secondary";

import CustomPageHandlers from "./components/sand/handlers";
import { themecolor } from "./components/dust/_colors";
import { themeconfig } from "./components/dust/_config";

const Frontstrap = {
  name: "@primitive/frontstrap",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      colors: themecolor,
      config: themeconfig,
      
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch: "in-view",
      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "us-ascii",
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      // toggleMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen; },
      // openMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = true; },
      // closeMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = false; }

      // beforeSSR: async ({ actions }) => {
      //  await actions.source.fetch(`/temporal_events/`)
      // }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link, wpBlockColumns, quoteBook, listDisco, form],
    },
    source: {
      handlers: CustomPageHandlers
    }
  },
};

export default Frontstrap;
