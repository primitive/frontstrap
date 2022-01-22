import { connect, styled, loadable } from "frontity";

//const Hero = loadable(() => import("@primitive/scenes/jungle"));
import Hero from '@primitive/scenes/jungle';
import Intro from '@primitive/rocks/page-home-intro';
import Gold from '@primitive/rocks/page-home-tabs';
import Silver from '@primitive/rocks/cpt-poststrip/post-strip';
import Bronze from "@primitive/rocks/page-home-bronze";

import Page from "./page";



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