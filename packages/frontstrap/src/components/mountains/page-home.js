import React from "react";
import { connect, styled, loadable } from "frontity";

//const Hero = loadable(() => import("scenes/jungle"));
import Hero from 'scenes/jungle';
import Intro from 'primitiverocks/page-home-intro';
import Gold from 'primitiverocks/page-home-tabs';
import Silver from 'primitiverocks/cpt-poststrip/post-strip';
import Page from "./page";
import Bronze from "primitiverocks/page-home-bronze";


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