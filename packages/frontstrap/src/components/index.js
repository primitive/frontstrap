import { connect, Global, Head, styled, loadable } from "frontity";
import Switch from "@frontity/components/switch";

import Loading from "@primitive/pebbles/loading";
import MetaTitle from "@primitive/pebbles/meta-title";
import globalStyles from "./dust/global-styles";
//import FontFaces from "./dust/_font-faces";


const Home = loadable(() => import("./mountains/page-home"));
const Post = loadable(() => import("./mountains/post"));
const Page = loadable(() => import("./mountains/page"));
const PageError = loadable(() => import("./mountains/page-error"));
import Posts from "./mountains/post-list";
import Timelines from "./mountains/timelines";
import Timeline from "./mountains/timeline";
import SubTimeline from "./mountains/subtimeline";

import Header from "./header";
import SkipLink from "@primitive/pebbles/skip-link";
import GlobalPromo from "@primitive/rocks/global-promo";
import GlobalSocial from "@primitive/rocks/src/social/social-section";

import KnobblyKnees from "@primitive/rocks/footer-cta";
import FurryBoots from "@primitive/rocks/footer-kudos";

const Feet = loadable(() => import("./footer"));


/*
  const KnobblyKnees = loadable(() => import("@primitive/rocks/footer-cta"));
  const FurryBoots = loadable(() => import("@primitive/rocks/footer-kudos"));
*/

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {

  // get the skeletal data associated with the current URL.
  const data = state.source.get(state.router.link);
  const display = state.theme.config;

  if (state.theme.debug) {
    console.log("@index: data", data);
    //console.log("@index: display", display);
    //console.log("@index: colors", state.theme.colors);
    //console.log("@index: config", state.theme.config);
    console.log('canonical', state.theme.canonical);
  }

  return (
    <App>

      <Global styles={globalStyles(state.theme.config, state.theme.colors)} /> 
      {/* reboot and styled html elements */}

      { /* <FontFaces /> */}

      <MetaTitle />
      {/* Adds metatags */}

      <Head>
        
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        <link rel="canonical" href={state.theme.canonical} />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha2/css/bootstrap-grid.min.css" integrity="sha512-Jn+RkWIYxM5Cn3mfAWyV7CgxFnDFxe3EBh93974boKdhcAUE9TSr7qJTJNlzt+J2wG6a3sLYnEyRF+1/o01u9Q==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha2/css/bootstrap-utilities.min.css" integrity="sha512-mkkoFJEfBE2cFvIICxddh2VS0uB//H6/hf7siESrN2H7NiyzoGwZ5Rk3Ta12mPxlNOVq5IjhQ97YBK11vldYug==" crossorigin="anonymous" />
        
        <link rel="preconnect" SameSite="None" Secure href="https://www.google-analytics.com" />
        { /* <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" /> */ }
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />
        
      </Head>

      {/* Accessibility: skip to main content */}
      <SkipLink as="a" href="#main">Skip to main content</SkipLink>

      { /* Load global Nav/Header */}
      <Header />

      {/* Render content for the post(s), page, cpt(s) here */}
      <Main
        id="main"
        bg={display.main.bg}
        bordertop={display.main.bordertop}
        borderbottom={display.main.borderbottom}
      >

        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Page when={data.isPage} />
          <Posts when={data.isPostArchive} />
          <Post when={data.isPost} />
          <Timeline when={data.isTemporalEventsArchive} />
          <SubTimeline when={data.isTimelineType} />
          <Timelines when={data.isTimelines} />
          <PageError when={data.isError} />
        </Switch>

      </Main>

      {display.showPromo && <GlobalPromo />} { /* Promo section: (optional) */}

      {display.showSocial && <GlobalSocial />} { /* Social section: (optional) */}

      <KnobblyKnees /> { /* CTA section: (optional) */}

      <FurryBoots /> { /* Assurance section: brands/reviws/offers (optional) */}

      <Feet /> { /* footer */}

    </App>
  );
};

export default connect(Theme);

const App = styled.div`
  overflow-x: hidden;
  height: 100%;
`;

const Main = styled.div`
  border-top:  ${(props) => props.bordertop ? props.bordertop : 'none'};
  border-bottom:  ${(props) => props.borderbottom ? props.borderbottom : 'none'};
  background: ${(props) => props.bg ? props.bg : 'Baby Powder'};
  overflow: hidden;
`;