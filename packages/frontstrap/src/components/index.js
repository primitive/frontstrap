import { connect, Global, Head, styled, loadable } from "frontity";
import Switch from "@frontity/components/switch";

// see: https://react-bootstrap.github.io/getting-started/server-side-rendering/
import SSRProvider from 'react-bootstrap/SSRProvider';

import Loading from "@primitive/pebbles/loading";
import MetaTitle from "@primitive/pebbles/meta-title";
import globalStyles from "./dust/global-styles";
//import FontFaces from "./dust/_font-faces";

import Header from "./header";
const Home = loadable(() => import("./mountains/page-home"));
const Post = loadable(() => import("./mountains/post"));
const Page = loadable(() => import("./mountains/page"));
const PageError = loadable(() => import("./mountains/page-error"));

import Posts from "./mountains/post-list";
import Timelines from "./mountains/timelines";
import Timeline from "./mountains/timeline";
import SubTimeline from "./mountains/subtimeline";

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
    console.log("@index: display", display);
    console.log("@index: colors", state.theme.colors);
    console.log("@index: config", state.theme.config);
    console.log('canonical', state.theme.canonical);
  }

  return (
    <SSRProvider>
      <App>

        <Global styles={globalStyles(state.theme.config, state.theme.colors)} /> 
        {/* html element + global styles */}

        { /* <FontFaces /> */}

        <MetaTitle />
        {/* Adds metatags */}

        <Head>
          
          <html lang="en" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={state.theme.canonical} />
          <meta name="description" content={state.frontity.description} />

          <link rel="stylesheet" href={state.theme.fonts}></link>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" integrity="sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          
          <link rel="preconnect" SameSite="None" Secure href="https://www.google-analytics.com" />
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
    </SSRProvider>
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