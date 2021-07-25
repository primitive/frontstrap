import { connect, styled, loadable } from "frontity";

//const Hero = loadable(() => import("scenes/jungle"));
import Hero from 'scenes/jungle';
import Intro from 'rocks/page-home-intro';
import Gold from 'rocks/page-home-tabs';
import Silver from 'rocks/cpt-poststrip/post-strip';
import Page from "./page";
import Bronze from "rocks/page-home-bronze";


const PageHome = ({ state }) => {

  // get the theme config from state
  const display = state.theme.config.homepage;

  if (state.theme.debug) {
    //console.log("@page-home: display", display ); 
  }

  return (
    <HomePage>

      {display.showHero && (
        <Hero props={display.hero} />
      )}

      {display.showIntro && (
        <Intro props={display.intro}/>
      )}

      {display.showGold && (
        <Gold />
      )}

      {display.showSilver && (
        <Silver props={display.silver} />
      )}

      <Page />

      {display.showBronze && (
        <Bronze />
      )}

    </HomePage>
  );
};

export default connect(PageHome);

const HomePage = styled.div`

`;