import { css } from "frontity";
//import { Grid } from "./_grid";
// import { themeconfig } from "./_config";
// import baseStyles from "./_base";

// * TODO: Rework + simplify / use CSS vars where possible * 
/* https://getbootstrap.com/docs/5.3/customize/css-variables/#root-variables */
// currentColor - https://css-tricks.com/currentcolor/
// vendor prefixing: emotion uses Stylis: https://emotion.sh/docs/@emotion/cache#prefix
// https://emotion.sh/docs/best-practices


const globalStyles = (config, colors) => css`

:root {

  --bs-yellow: ${colors.yellow};
  --bs-green: ${colors.green};

  --bs-dark-rgb: 15,74,71;

  --bs-color-primary: var(--bs-green);
  --bs-color-secondary: var(--bs-yellow);

  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;


  // TYPOGRAPHY
  --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

  --pd-font-family-book: ${config.style.fontFamily.book ? config.style.fontFamily.book : '"Times New Roman",serif'};
  --pd-font-family-brush: ${config.style.fontFamily.brush ? config.style.fontFamily.brush : '"Brush Script MT",cursive'};
  --pd-font-family-display: ${config.style.fontFamily.display ? config.style.fontFamily.display : 'Arial, sans-serif'};
  --pd-font-family-news: ${config.style.fontFamily.news ? config.style.fontFamily.news : 'Baskerville,Garamond,serif'};
  --pd-font-family-sans: ${config.style.fontFamily.sans ? config.style.fontFamily.sans : 'var(--bs-font-sans-serif)'};
  --pd-font-family-sans-cond: ${config.style.fontFamily.sansCond ? config.style.fontFamily.sansCond : 'var(--bs-font-sans-serif)'};
  --pd-font-family-script: ${config.style.fontFamily.script ? config.style.fontFamily.script : '"Brush Script MT",cursive'};
  --pd-font-family-serif: ${config.style.fontFamily.serif ? config.style.fontFamily.serif : 'Georgia,serif'};

  --bs-body-font-family: var(--pd-font-family-book);

  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 300;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;

}


body {
  margin: 0;
  padding: 0px; 
  width: 100%;
  height: 100%; 

  background-color: ${config.style.body.bg ? config.style.body.bg : 'ivory'};

  &::-webkit-scrollbar { width:1.2rem; }
  &::-webkit-scrollbar-track {
    background: ${colors.greendark};
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(${colors.rgb.black}, .3);
  }	

}

.last-updated {
  display: none;
}

[tabindex="-1"]:focus:not(:focus-visible) { outline: 0 !important; }

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}
hr:not([size]) { height: 1px; }

blockquote {
  position : relative; 
  margin: 5rem 0 2rem auto; 
  padding: 150px 50px 1.5rem 1.5rem; 
  width: 60%;
  max-width: 600px;
  min-width: 300px;
  background-color: transparent;
  border-left: 4px solid rgba(${colors.rgb.gray}, 0.8);

  p {
    margin : 0;
    padding : .3rem 0;
    display: inline; 

    color: rgba(${colors.rgb.gray}, 0.6);
    font-family: Baskerville,Georgia,serif;
    font-style: italic; 
    font-size: 2.1rem; 
    line-height: 3.8rem; 
    text-shadow: 0 1px 1px rgba(255,255,255, 0.5);  
  }
  cite {
    display: block;
    padding: 1rem 1rem 1rem 0;
    font-size : 1.5rem; 
    font-style : normal;
    font-family: var(--pd-font-family-sans-cond);
  } 

  &::after {
    content: "❞";
    margin-left: -65px;
    position: absolute;
    height: 130px;
    width: 130px;
    top: 0;
    left: 50%;

    color: rgba(${colors.rgb.white}, 0.5);
    background: rgba(${colors.rgb.gray}, 0.8);
    border-radius: 50% 50% 50% 50%;
    
    font-family: 'icons';
    text-align: center;
    font-size: 70px;
    line-height: 130px;
  }
} 

a {
  color: ${colors.primary};
  text-decoration: none;
  transition: all .5s ease-in-out;
}
a:hover {
  color: ${colors.purple};
  text-decoration: none;
}
a:focus {
  text-decoration: none;
}
a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
a + a {
  margin-left: 5px;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  padding: 0.25rem 0.4rem;
}

pre {
  -ms-overflow-style: scrollbar;
}

code, samp{
  background: rgba(0, 0, 0, 0.075);
  border-radius: 0.3rem;
}

a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background: rgba(0, 0, 0, 0.075);
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
  display: block;
}

svg,
img,
embed,
object {
  display: block;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}


fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
  white-space: normal;
}
legend + * { clear: left; }

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

::-webkit-search-decoration { -webkit-appearance: none; }
::-webkit-color-swatch-wrapper { padding: 0; }
::-webkit-file-upload-button { font: inherit; -webkit-appearance: button; }

output { display: inline-block; }
iframe, video { display: block; border: 0; max-width: 100%; }
summary { display: list-item; cursor: pointer; }
progress { vertical-align: baseline; }
[hidden] { display: none !important;}

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

`;

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
.brush {
  font-family: var(--pd-font-family-brush);
}
.news {
  font-family: var(--pd-font-family-news);
}

h4, .h4, .slab {
  font-family: var(--pd-font-family-serif);
  font-size: 1.6rem;

}
h5, .h5, .subslab {
  font-family: var(--pd-font-family-sans);
  font-size: 1.3rem;
}
h6, .h6, .scribe {
  font-family: var(--pd-font-family-script);
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
    globalStyles(config, colors),
    typeStyles(config, colors),
    accessibilitySettings
  ]);

export default globalStyle;