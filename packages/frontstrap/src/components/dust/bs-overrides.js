import { css } from "frontity";
// based on Bootstrap's reboot
// test: * selector

// * CSS variables * 
// currentColor - https://css-tricks.com/currentcolor/
// vendor prefixing: emotion uses Stylis: https://emotion.sh/docs/@emotion/cache#prefix

const bsOverrides = (config, colors) => css`


html { 
  margin: 0px;
  padding: 0px; 
  width: 100%;
  height: 100%; 
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

[tabindex="-1"]:focus:not(:focus-visible) { outline: 0 !important; }

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}
hr:not([size]) { height: 1px; }







abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  position : relative; 
  margin: 5rem 0 2rem auto; 
  padding: 150px 50px 1.5rem 1.5rem; 
  width: 33vw;
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
    font-family: 'Amatic SC', sans-serif;
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

b, strong { font-weight: bold; }
small { font-size: 0.875em; }

mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
sub { bottom: -.25em; }
sup { top: -.5em; }

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
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
}


pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
  -ms-overflow-style: scrollbar;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
  background: rgba(0, 0, 0, 0.075);
}
samp {
  background: rgba(0, 0, 0, 0.075);
  border-radius: 0.2rem;
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

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role="button"] {
  cursor: pointer;
}

select {
  word-wrap: normal;
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

textarea {
  resize: vertical;
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

`;


export default bsOverrides;