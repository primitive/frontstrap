import { css } from "frontity";
//import { Grid } from "./_grid";
// import { themeconfig } from "./_config";

import baseStyles from "./_base";


const typeStyles = (config, colors) => css`

body {
  text-size-adjust: 100%;
  font-family: ${config.style.body.font.family ? config.style.body.font.family : '"Segoe UI", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'};  
  font-size: ${config.style.body.font.size ? config.style.body.font.size : '1rem'};
  font-weight: ${config.style.body.font.weight ? config.style.body.font.weight : '300'};
  font-style: normal;
  line-height: ${config.style.body.font.lineheight ? config.style.body.font.lineheight : '1.5'};
  color: ${config.style.body.font.color ? config.style.body.font.color : '#212529'};
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 { 
  font-family: var(--pd-font-family-display);
  font-size: 3.3rem;
  font-variation-settings: "STRS" -50, "wdth" 100;
}
.display { 
  font-family: var(--pd-font-family-display);
  font-variation-settings: "STRS" -50, "wdth" 100;
}

h2, .h2 {
  font-family: var(--pd-font-family-sans-cond);
  font-size: 3rem;
}
.heading {
  font-family: var(--pd-font-family-sans-cond);
}

h3, .h3 {
  font-family: var(--pd-font-family-brush);
  font-size: 2.8rem;
}
.news {
  font-family: var(--pd-font-family-news);
}

h4, .slab {
  font-family: var(--pd-font-family-serif);
  font-size: 1.6rem;

}
h5, .subslab {
  font-family: var(--pd-font-family-sans);
  font-size: 1.3rem;
}
h6, .scribe, .brush {
  font-family: var(--pd-font-family-brush);
  font-size: 1.2rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
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

  /*
  .q-wrap blockquote {
    position: relative;
    transform: translateX(0%);
    animation: slide 10s infinite;
  }

  @keyframes slide {
    0% { transform: translateX(0%); }
    25% { transform: translateX(10%); }
    50% { transform: translateX(0%); }
    75% { transform: translateX(10%); }
    100% { transform: translateX(0%); }
  }

  */

  .last-updated {
    display: none;
  }

`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;


const globalStyle = (config, colors) =>
  css([
    baseStyles(config, colors),
    typeStyles(config, colors),
    accessibilitySettings,
    globalStyles(colors)
  ]);

export default globalStyle;