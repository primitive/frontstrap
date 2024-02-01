import { css } from "frontity";
import { hexToRGBcss } from "../sand/color-utils";
import { mq2col } from "@primitive/pebbles/grid";
//import { colors } from "./_colors.js";
//import { mq2col } from './_grid';

/*
const darkGray = (colors) => {
  debugger;
  const darker = rgbShade(-0.4, colors.gray);
  return darker;
}
console.log(darkGray(colors));
*/

/* Theme with Dark/Light variants */
const jungleStyles = colors => {
  return {
    bg: {
      dark: css`background-color: ${colors.gray};
      background: linear-gradient(to bottom, rgba(${colors.rgb.black}, 0.01) 0%, rgba(${colors.rgb.black}, 0.1) 45%, rgba(${colors.rgb.black}, 0.3) 65%, rgba(${colors.rgb.black}, 0.5) 100%),
        linear-gradient(to right, rgba(${colors.rgb.black}, 0.2) 0%, rgba(${colors.rgb.black}, 0.2) 90%, rgba(${colors.rgb.black}, 0.5) 100%),
        linear-gradient(to left, rgba(${colors.rgb.black}, 0.2) 0%, rgba(${colors.rgb.black}, 0.2) 90%, rgba(${colors.rgb.black}, 0.5) 100%),
        url(https://primitivedigital.uk/wp-content/uploads/stone/aztec-300x300.png) repeat fixed;`,

      light: css`background-color: ${colors.gray};
        background: linear-gradient(to bottom, rgba(${colors.rgb.black}, 0.01) 0%, rgba(${colors.rgb.black}, 0.5) 100%),
          linear-gradient(to right, rgba(${colors.rgb.black}, 0.2) 0%, rgba(${colors.rgb.black}, 0.2) 90%, rgba(${colors.rgb.black}, 0.5) 100%),
          linear-gradient(to left, rgba(${colors.rgb.black}, 0.2) 0%, rgba(${colors.rgb.black}, 0.2) 90%, rgba(${colors.rgb.black}, 0.5) 100%),
          url(https://primitivedigital.uk/wp-content/uploads/stone/junglerock-300x261.png) repeat fixed;`
    }
  }
}

const flexRow = `
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const flexCol = `
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
const flex2Col = css(mq2col({
  flex: ['0 0 100%', '0 0 50%'],
}))



const listStyle1 = colors => css`
  margin : 5px 0 40px; 
  padding : 10px 20px 20px; 
  position : relative; 
  text-align: center;

  ul {
    margin: 1rem 1.5rem 0 5rem;
    padding: 2rem 1rem;
    background: rgba(${colors.rgb.white}, 0.7);
    border: 2px solid ${colors.coal};
  }

  li {
    margin: 0;
    padding: .2rem .5rem;
    font-family: var(--pd-font-family-sans-cond);
    font-size: 1.7rem;
    line-height: 1.6;
    list-style: none;
    color: ${colors.coal};
    text-shadow: 1px 1px 0 rgba(rgba(${colors.rgb.white}, 0.6));
  }
`;

const pageHeader = colors => `
  margin: 2rem auto;
  padding: 3rem 2.5rem;
  max-width: 800px;

  color: rgba(${colors.rgb.black}, 0.9);
  font-family: var(--pd-font-family-news);
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 2px 8px 6px rgba(${colors.rgb.black}, 0.2), 0px -5px 35px rgba(${colors.rgb.black}, 0.3);

  background-color: rgba(${colors.rgb.white}, 0.4);
  background-image: linear-gradient(to bottom, rgba(${colors.rgb.white}, 0.4), rgba(${colors.rgb.white}, 0.6));
  border: solid 1px rgba(${colors.rgb.white}, 0.6);
  outline: solid 1px rgba(${colors.rgb.black}, 0.1);
  outline-offset: -0.5rem;
  box-shadow: 2px 8px 6px rgba(${colors.rgb.black}, 0.2), 0px -5px 33px rgba(${colors.rgb.white}, 0.3);
`;

const oronymTop = colors => `
  position: relative;
  font-family: var(--pd-font-family-display); 
  color: ${colors.black};

  font-size:  5rem;
  line-height: 4.5rem;
  letter-spacing: 2px;
  font-weight: 400;
  text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.6), 
    0px 1px 0 rgba(${colors.rgb.white}, 0.6),
    1px 0px 0 rgba(${colors.rgb.white}, 0.6),
    -1px -1px 0 rgba(${colors.rgb.white}, 0.6),
    -0px -1px 0 rgba(${colors.rgb.white}, 0.6),
    -1px -0px 0 rgba(${colors.rgb.white}, 0.6);

  span {
    width: 100%;
    display: block;
    font-size:  2rem;
    color: #fff;
    font-family: var(--pd-font-family-news);
    text-shadow: -2px 1px 2px ${hexToRGBcss(colors.disco.cyan, 0.4)},
                 2px -1px 2px ${hexToRGBcss(colors.disco.magenta, 0.4)};
  }

  &::before {
    content: " ";
    display: block;
    width: 4rem;
    height: 12rem;
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    box-shadow: -2px -1px 2px ${hexToRGBcss(colors.disco.cyan, 0.4)},
                -1px -2px 2px ${hexToRGBcss(colors.disco.magenta, 0.4)};
  }
`;

const oronymBottom = colors => `
  margin-top: 0;
  margin-bottom: 3rem;
  padding-top: 0;

  font-size:  5rem;
  line-height: 4.5rem;
  letter-spacing: 2px;
  color: #000;
  text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.6), 
    0px 1px 0 rgba(${colors.rgb.white}, 0.6),
    1px 0px 0 rgba(${colors.rgb.white}, 0.6),
    -1px -1px 0 rgba(${colors.rgb.white}, 0.6),
    -0px -1px 0 rgba(${colors.rgb.white}, 0.6),
    -1px -0px 0 rgba(${colors.rgb.white}, 0.6);

  span {
    width: 100%;
    display: block;
    font-size:  2rem;
    color: #fff;
    font-family: var(--pd-font-family-news);
    text-shadow: -2px 1px 2px ${hexToRGBcss(colors.disco.cyan, 0.4)}, 2px -1px 2px ${hexToRGBcss(colors.disco.magenta, 0.4)};
  }

  &::after {
    content: " ";
    display: block;
    width: 4rem;
    height: 12rem;
    position: absolute;
    top: 6rem;
    right: 1.5rem;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    box-shadow: 2px 1px 2px ${hexToRGBcss(colors.disco.cyan, 0.4)}, 1px 2px 2px ${hexToRGBcss(colors.disco.magenta, 0.4)};
  }
`;

const quoteStyle1 = css`
  margin : 9rem 0 40px; 
  padding : 10px 20px 20px; 
  position : relative;

  blockquote {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`;


// p139: homepage
// p2136: housekeeping
// p37638: darwin

const pageall = colors => css`

  h1 {
    padding: 2rem 0 2rem;
    font-size: 4rem;
    text-align: center;
    text-shadow: .1rem .1rem ${colors.fluff};
  }

  p.fsletter::first-letter {
    font-weight: bold;
    color: red;
  }

  p.fsline::first-line
    font-weight: bold;
    color: green;
  }

  .intro {
    font-family: var(--pd-font-family-news);
    padding: 3px 5%;
    font-size: 1.3rem;
  }
  .motto {
    font-family: var(--pd-font-family-sans);
    padding: 1.5rem 5% 3rem;
    font-size: 2.3rem;
    color: ${colors.primary};
  }
  .panache {
    font-family: Baskerville, Georgia, serif; 
    padding: .5rem 5% .1rem;
    font-size: 1.6rem;
    color: rgba(${colors.rgb.black} 0.7);

    strong, a {
      color: ${colors.primary};
      font-style: italic;
      text-decoration: none;
    }
  }



  
  .has-text-align-left,
  .wp-block-image .alignleft {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .has-text-align-center,
  .wp-block-image .aligncenter {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
  }



  .btn {
    display: block;
    max-width: 300px;
    margin: 2rem auto;

    a {
      display: block;
      padding: .5rem;
      color: ${colors.white};
      font-size: 1.2rem;
      text-align: center;
      text-decoration: none;
      opacity: .8;

      &:hover {
        color: ${colors.white};
        opacity: 1;
      }
    }

    &:hover a {
      color: ${colors.white};
      opacity: 1;
    }
  }
  .btn-primary {
    
    text-shadow: 2px 2px 2px rgba(${colors.rgb.black}, 0.2);
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-left: 5px solid ${colors.primary};
    transition: all .5s ease-in-out;

    &:hover {
      background-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      max-width: 360px;
    }
    &:active {
      text-shadow: 1px 1px 0px rgba(${colors.rgb.black}, 0.3);
      max-width: 360px;
    }
  }






  .q-wrap {
    margin : 5px 0 40px auto; 
    padding : 10px 20px 20px; 
    position : relative; 
    max-width: 100vw;

  } 

  
  .q-style-1 {

    blockquote { 
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid rgba(${colors.rgb.secondary}, 0.8);

      p {
        box-shadow: 0 -6px 0 rgba(${colors.rgb.secondary}, 0.2); 
        color: rgba(${colors.rgb.secondary}, 0.8); 
        background: rgba(${colors.rgb.white}, 0.5);
      }

      &::before {
        border-left: 5px solid rgba(${colors.rgb.secondary}, 0.1);
        border-radius: 50% 50% 50% 50%;
        content: "";
        height: 500px;
        left: -50px;
        position: absolute;
        top: 0;
        width: 500px;
        z-index: -1;
      }

      &::after {
        background: rgba(${colors.rgb.secondary}, 0.8);
      }

    }
  }

  .q-style-2 {

    background-color: rgba(${colors.rgb.white}, 0.5);

    blockquote { 
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid rgba(${colors.rgb.secondary}, 0.8);

      p {
        box-shadow: 0 -6px 0 rgba(${colors.rgb.secondary}, 0.2); 
        color: rgba(${colors.rgb.secondary}, 0.8); 
      }

      &::before {
        border-left: 5px solid rgba(${colors.rgb.secondary}, 0.1);
        border-radius: 50% 50% 50% 50%;
        content: "";
        height: 500px;
        left: -50px;
        position: absolute;
        top: 0;
        width: 500px;
        z-index: -1;
      }

      &::after {
        background: rgba(${colors.rgb.secondary}, 0.8);
      }
    }
  } 

  .q-style-3 {
      
    ${quoteStyle1} 
    ${flexCol, flex2Col} 

    blockquote {
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid ${hexToRGBcss(colors.disco.neongreen, 0.6)};

      p {
        box-shadow: 0 -6px 0 ${hexToRGBcss(colors.disco.neongreen, 0.6)};
        color: ${colors.coal};
        background: rgba(${colors.rgb.white}, 0.5);

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      cite {
        padding: 0 .5rem;
        margin-right: auto;
        max-width: 40%;
        font-size: 1.8rem;
        color: ${colors.coal};
        text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.5);
        background: ${hexToRGBcss(colors.disco.neongreen, 0.4)};
      }
    
      &::after {
          background: ${hexToRGBcss(colors.disco.neongreen, 0.8)};
      }
    }
  } 

  .q-style-4 {
        
    ${quoteStyle1} 
    ${flexCol, flex2Col} 

    blockquote {
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid ${hexToRGBcss(colors.disco.purple, 0.8)};

      p {
        box-shadow: 0 -6px 0 ${hexToRGBcss(colors.disco.purple, 0.8)};
        color: ${colors.coal};
        background: rgba(${colors.rgb.white}, 0.5);

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      cite {
        padding: 0 .5rem;
        margin-right: auto;
        max-width: 40%;
        font-size: 1.8rem;
        color: ${colors.coal};
        text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.5);
        background: ${hexToRGBcss(colors.disco.purple, 0.4)};  
      }
    
      &::after {
        background: ${hexToRGBcss(colors.disco.purple, 0.8)};
      }
    }
  }

  .q-style-5 {
      
    ${quoteStyle1} 
    ${flexCol, flex2Col} 

    blockquote {
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid ${hexToRGBcss(colors.disco.blue, 0.6)};

      p {
        box-shadow: -3px -6px 0 ${hexToRGBcss(colors.disco.blue, 0.6)}, 3px 3px 0 rgba(255,0,180,0.6);
        color: ${colors.coal};
        background: rgba(${colors.rgb.white}, 0.5);

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      cite {
        font-size: 1.8rem;
        color: ${colors.coal};
        text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.5);
      }
    
      &::after {
        background: ${hexToRGBcss(colors.disco.blue, 0.7)};
      }
    }
  } 

  .q-style-6 {
      
    margin: 2.5rem auto 2rem;
    max-width: 450px;

    blockquote {
      background-color: rgba(${colors.rgb.white}, 0.5);
      border-left: 4px solid rgba(${colors.rgb.info}, 0.8);

      p {
        background: rgba(${colors.rgb.white}, 0.6);
        color: ${colors.coal};
        

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        &::after {
          content: "";
          position: absolute;
          top: -0.5rem;
          right: 100%;
          bottom: -0.5rem;
          width: 0.5rem;
        }
      }

      cite {
        font-size: 1.8rem;
        color: ${colors.white};
        text-shadow: 1px 1px 0 rgba(${colors.coal}, 0.5);
      }
    
      &::after {
        background: rgba(${colors.rgb.info}, 0.8);
      }
    }
  }

  .q-style-7 {
      
    ${quoteStyle1} 
    ${flexCol, flex2Col} 

      blockquote {
        background-color: rgba(${colors.rgb.white}, 0.5);
        border-left: 4px solid ${hexToRGBcss(colors.disco.blue, 0.6)};

        p {
          padding: .5rem 0;
          line-height: 4rem;
          background: rgba(${colors.rgb.white} 0.6);
          box-shadow: -3px -6px 0 ${hexToRGBcss(colors.disco.blue, 0.6)}, 3px 3px 0 rgba(255,0,180,0.6);
          color: ${colors.coal};
          white-space: pre-wrap;
          text-shadow: 0 1px 1px ${hexToRGBcss(colors.white, 0.5)};
          border-width: 0.5rem 0;

          span {
            display: inline-block;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          &::after {
            content: "";
            position: absolute;
            top: -0.5rem;
            right: 100%;
            bottom: -0.5rem;
            width: 0.5rem;
          }
        }

        cite {
          font-size: 1.8rem;
          color: ${colors.coal};
          text-shadow: 1px 1px 0 rgba(${colors.rgb.white}, 0.5);
        }
    
        &::after {
          background: ${hexToRGBcss(colors.disco.blue, 0.7)};
        }
      }
    }
    
    .q-style-8 {
      
      margin: 2.5rem auto 2rem;
      max-width: 450px;
  
      blockquote {
        background-color: rgba(${colors.rgb.white}, 0.5);
        border-left: 4px solid rgba(${colors.rgb.warning}, 0.8);
  
        p {
          padding: .5rem 0;
          line-height: 4rem;
          background: rgba(${colors.rgb.white}, 0.6);
          box-shadow: 0 -6px 0 rgba(${colors.rgb.warning}, 0.8);
          color: ${colors.coal};
          white-space: pre-wrap;
          text-shadow: 0 1px 1px rgba(${colors.rgb.white}, 0.5);
          border-width: 0.5rem 0;
  
          span {
            display: inline-block;
            padding-left: 1rem;
            padding-right: 1rem;
          }
  
          &::after {
            content: "";
            position: absolute;
            top: -0.5rem;
            right: 100%;
            bottom: -0.5rem;
            width: 0.5rem;
          }
        }
        cite {
          font-size: 1.8rem;
          color: ${colors.white};
          text-shadow: 1px 1px 0 rgba(${colors.coal}, 0.5);
        }
        &::after {
          background:  rgba(${colors.rgb.warning}, 0.8);
        }
      }
    }


    .fleuron { 
      font-size: 3rem;
      color: rgba(${colors.rgb.primary}, 0.6) !important;
  
      a {
        color: rgba(${colors.rgb.warning}, 0.6) !important;
        text-decoration: none;
        background: transparent !important;
        border: none !important;
  
        &::hover {
          color: rgba(${colors.rgb.danger}, 0.6) !important;
          background: transparent !important;
          border: none !important;
        }
      }
    }
    .fleuron.has-text-align-center {
      margin-top: 2.5rem;
      text-align: center;
      
      a {
        vertical-align: middle;
        line-height: 3rem;
      }
  
      em {
        display: inline-block;
        color:  ${colors.coal};
        font-size: .5rem;
        letter-spacing: 2px;
        vertical-align: middle;
        line-height: 3rem;
      }
    }

  @media screen and (min-width: 576px) {
    .split-col {
      column-count: 2;
    }
  }
  @media screen and (min-width: 768px) {
    .split-col {
      column-count: 2;
    }
    .q-wrap {
      width : 60%; 
    }
  }
  @media screen and (min-width: 992px) {
    .split-col {
      column-count: 2;
    }
  }

`;

/* Homepage: p139 */
const pagehome = colors => css`
  #page-139 {
    h3 {
      margin-bottom: 1.2rem;
      font-weight: bold;
      color: rgba(${colors.rgb.black}, 0.9);

      &::after {
        content: " ";
        display: block;
        margin: 1.2rem auto 0 0;
        width: 5rem;
        height: 3px;
        background: rgba(${colors.rgb.primary}, 0.8);
      }

      &:nth-of-type(even)::after {
        background: rgba(${colors.rgb.secondary}, 0.8);
      }
    }
  }
`;

// STYLED LANDING PAGES
/* Design Page: p8 */
/* Development Page: p1904 */
/* Data Page: p2102 */
/* Marketing Page: p2128 */
const landingPages = colors => css`
  #page-8, #page-1904, #page-2102, #page-2128 {

    ${jungleStyles(colors).bg.dark}         
    h1 { ${pageHeader(colors)} }
    .content { ${flexRow} }  

    .list-style-1 {
      ${listStyle1(colors)} 
      ${flexCol, flex2Col} 
  
      h2 { ${oronymTop(colors)} }
      h3 { ${oronymBottom(colors)} }
    } 

    .list-style-2 {
      ${listStyle1(colors)} 
      ${flexCol, flex2Col} 

      h2 { ${oronymTop(colors)} }
      h3 { ${oronymBottom(colors)} }
    } 

    blockquote {
      margin-top: 2rem;
      margin-right: auto;
      background-color: rgba(${colors.rgb.white}, 0.7);
      border-radius: 1rem;
      p {
        color: ${colors.coal};
      }
    }
    blockquote::after {
      top: 1rem;
      left: 5rem;
    }

  }
`;



const pageStyles = colors =>
  css([
    pageall(colors),
    pagehome(colors),
    landingPages(colors)
  ]);

export default pageStyles;