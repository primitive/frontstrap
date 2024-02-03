import { css } from "frontity";
//import { hexToRGBcss } from "../sand/color-utils";

const postall = colors => css`
.post {

      a {
        color: inherit;
        border-bottom: 2px solid ${colors.warning};
        background-image: linear-gradient(120deg, ${colors.warning} 0%, ${colors.warning} 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.0em;
        background-position: 0 100%;
        transition: background-size 0.125s ease-in;

        &:hover {
          text-decoration: none;
          background-size: 100% 100%;
          color: black;
        }
      }

      .intro {
        font-family: var(--pd-font-family-serif);
        text-align: center;
        padding: 3px 5%;
        font-size: 1.3rem;
      }

      .hello {
        padding: 1rem 1.2rem;
        font-family: var(--pd-font-family-serif);
        font-size: 2rem;
        color: ${colors.coal};

        a {
          color: ${colors.secondary}; 
          border-bottom: none;
          background: none;
          transition: all 0.125s ease-in;

          &:hover {
            text-decoration: none;
            background: none;
            color: ${colors.danger}; 
          }
        }
      }

      .blurb {
        padding: 1rem 1.2rem;
        font-size: 2rem;
        font-family: var(--pd-font-family-serif);
        color: ${colors.primary};
    
        a {
          color: ${colors.primary}; 
          border-bottom: none;
          background: none;
          transition: all 0.125s ease-in;

          &:hover {
            text-decoration: none;
            background: none;
            color: ${colors.info}; 
          }
        }
      }

      .panache {
        padding: .5rem 5% .1rem;
        font-size: 1.6rem;
        font-family: Baskerville, Georgia, serif; 
        color: rgba(${colors.rgb.black}, 0.7);
            
        strong, a {
          color: ${colors.primary}; 
          border-bottom: none;
          background: none;
          transition: all 0.125s ease-in;
        }
      }

      .fleuron { 
        font-size: 3rem;
        color: rgba(${colors.primary}, 0.6);
    
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
          color:  ${ colors.coal };
          font-size: .5rem;
          letter-spacing: 2px;
          vertical-align: middle;
          line-height: 3rem;
        }
      }
    

    .circle {
      padding: 2rem 1rem 2rem 1rem;
      position: relative;
      left: -2rem;
      font-family: var(--pd-font-family-serif);
      font-size: 1.3rem;
      text-shadow: 1px 1px 0 rgba(${colors.rgb.gray}, 0.3);
  
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -0.3rem;
        left: -1rem;
        width: 6rem;
        height: 6rem;
        border-radius: 50px;
        background-color: rgba(${colors.rgb.gray}, 0.2);
      }
    }
    .circle-primary {
      text-shadow: 1px 1px 0 rgba(${colors.rgb.primary}, 0.3);
      &::before {
        background-color: rgba(${colors.rgb.primary}, 0.2);
      }
    }
    .circle-secondary {
      text-shadow: 1px 1px 0 rgba(${colors.rgb.secondary}, 0.3);
      &::before {
        background-color: rgba(${colors.rgb.secondary}, 0.2);
      }
    }
    .circle-warning {
      text-shadow: 1px 1px 0 rgba(${colors.rgb.warning}, 0.3);
      &::before {
        background-color: rgba(${colors.rgb.warning}, 0.2);
      }
    }
    

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
      border: none;
      background: transparent;
      opacity: .9;

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
    text-shadow: 2px 2px 2px ${colors.rgb.black}, 0.2);
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-left: 5px solid ${colors.primary};
    transition: all .5s ease-in-out;

    &:hover, &:active, &:focus {
      background-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      max-width: 360px;
    }
  }

      

`;

// target wp classes
const wpclasses = colors => css`    

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

  .overlay-text figure {
      position: relative;
      
      figcaption {
        padding: 1rem;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: "Playfair Display";
        font-size: 5rem;
        color: black;
        text-align: center;
        mix-blend-mode: screen;
        background-color: rgba(244, 220, 211, .8);
      }
    }

    .equation figure {
      overflow: hidden;
      border-radius: 150px 15px 150px 15px/15px 150px 15px 150px;
      box-shadow: 0 2px 2.2px rgba(0,0,0,0.034), 
                  0 6px 5.3px rgba(0,0,0,0.048), 
                  0 12px 10px rgba(0,0,0,0.06);

        figcaption {
          
          padding: .5rem 1.5rem 1.5rem;
          font-family: var(--pd-font-family-sans-cond);
          font-size: 2rem;
          text-align: center;
          color: black;
          text-shadow: 1px 12px 0 rgba(255,255,255,.8);
        }
    }

    .wp-block-image {
      margin-bottom: 1.5rem; 
    }

    blockquote.has-text-align-center {

      position: relative;

      cite {
        font-size: .7rem;
        letter-spacing: 3px;

        a {
          color: ${colors.gray};
          font-weight: bold;
          text-decoration: none;
        }
      }
      
      &::before {
        content: "";
        display: block;
        height: 135px;
        width: 240px;
        position: absolute;
        left: -243px;
        top: 0;
        background-image: url("https://media.giphy.com/media/aTGwuEFyg6d8c/giphy.gif");
        background-size: contain;
        background-repeat: no-repeat;

        opacity: .8;
      }
      
    }

`;



const postStyles = colors =>
  css([
    postall(colors),
    wpclasses(colors)
  ]);

export default postStyles;