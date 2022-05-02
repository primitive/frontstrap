import { css } from "frontity";
//import { Grid } from "./_grid";
import { themeconfig } from "./_config";
import cssReboot from "./_reboot";
import bsStyles from "./_bscss";



//sk-dev: missing css animation now - check safari / mobile
/*
const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;
*/

const typeSetting = (config, colors) => css`

html {
  font-size: 100%;
  font-size: calc(3vw);
}

body {
  text-size-adjust: 100%;
  font-family: ${config.style.body.font.family ? config.style.body.font.family : '"Segoe UI", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'};
  font-size: ${config.style.body.font.size ? config.style.body.font.size : '1rem'};
  font-weight: ${config.style.body.font.weight ? config.style.body.font.weight : '300'};
  line-height: ${config.style.body.font.lineheight ? config.style.body.font.lineheight : '1.5'};
  color: ${config.style.body.font.color ? config.style.body.font.color : '#212529'};
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1, .slab { 
  font-family: 'Hepta Slab', serif;
  font-size: 3.3rem;
  /*font-size: calc(1.375rem + 1.5vw);*/
}
h2, .heading {
  font-family: 'Amatic SC', sans-serif;
  font-size: 3rem;
  font-size: calc(1.325rem + 0.9vw);
}
h3, .news {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.8rem;
  /*font-size: calc(1.3rem + 0.6vw);*/
}
h4, .display {
  font-family: 'Hepta Slab', serif;
  font-size: 1.6rem;
  /* font-size: calc(1.275rem + 0.3vw);*/
}
h5, .subslab {
  font-family: 'Slabo 27px', Georgia, serif;
  font-size: 1.3rem;
}
h6, .scribe {
  font-family: 'Pacifico', cursive;
  font-size: 1.2rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.8;
}



@media screen and (min-width: 576px) {
  html { font-size: 14px; }
}
@media screen and (min-width: 768px) {
  html { font-size: 15px; }
}
@media screen and (min-width: 992px) {
  html { font-size: 16px; }
}
@media screen and (min-width: 1200px) {
  html { font-size: 18px; }

}

`;

const globalStyles = colors => css`

  figcaption,
  .wp-caption-text {
    color: ${colors.gray};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }

  .navbar-brand a {
    width: 200px;
  }

  .last-updated {
    display: none;
  }

`;




const globalStyle = (config, colors) =>
  css([
    cssReboot(config, colors),
    typeSetting(config, colors),
    bsStyles, //20kb
    //accessibilitySettings,
    globalStyles(colors)
  ]);

export default globalStyle;