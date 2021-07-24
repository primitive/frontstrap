import React from 'react'
import { css, styled } from "frontity";
import { themecolor } from "../components/dust/_colors";


/* Contact Page: p19466 */
const FormStyles = colors => css`

    margin: 2rem auto;
    position: relative;
    width: calc(vw / 3);
    min-width: 280px;
    max-width: 600px;
    
    form {
      overflow: hidden;
      padding: 2rem;
      border: 1px solid #e7e7e7;

      font-family: "Slabo 27px";
      
      background: #26D0CE linear-gradient(to top, #1a2980, #26d0ce);
      box-shadow: 1px 4px 8px rgba(0,0,0, .3);
      border-radius: .6rem;

      label {
        display: block;
        margin: 0;
        padding: 1rem 1rem .4rem;
        background-color: ivory;
        background-image: linear-gradient(0, rgba(255,255,255, .3) 0%, rgba(0, 0, 0, .1) 100%);
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        color: rgb(0,165,70);
        font-size: 1.3rem;
        font-weight: 800;
        letter-spacing: 1px;
        text-shadow: 1px 1px 0 rgba(0,165,70, .3);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }

      input[type=text], input[type=number], input[type=email], textarea {
        margin-bottom: 1rem;
        padding: 1rem;
        width: 100%;

        border: 0;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;

        background-color: white;
        background-image: linear-gradient(180deg, rgba(227, 255, 231, .6) 0%, rgba(217, 231, 255, .6) 100%);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
      span.ftype {
        margin-bottom: 1rem;
        border-radius: 0;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;

        background-color: white;
        background-image: linear-gradient(180deg, rgba(227, 255, 231, .6) 0%, rgba(217, 231, 255, .6) 100%);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

        select {
          border: 0;
          width: 100%;
          height: 4rem;
          border: none;
          background: transparent;
        }
      }

      .btn {
        width: 80%;
      }

      br { display: none; }

      .form-group {
      
        .wpcf7-form-control-wrap {
          display: block;

          &::before {
            content: '';
            display: block;
            margin-top: -.3rem;
            height: .3rem;
            width: 100%;
            background: linear-gradient(
              -45deg, 
              #9bc85a 25%, 
              rgb(0, 165, 70) 25%, 
              rgb(0, 165, 70) 50%, 
              #9bc85a 50%, 
              #9bc85a 75%, 
              rgb(0, 165, 70) 75%, 
              rgb(0, 165, 70)
              );
            background-size: 20px 20px;
            background-position: 0 0;
          }
        }

      }

      &::before {
        content: '';
        padding: 6rem;
        height: 200vw;
        width: 200vw;
        position: absolute;
        top: 3rem;
        left: -50vw;
        
        border: 1rem solid ${themecolor.primary};
        background: #59C173;
        background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
        opacity: .5;
  
        transform: rotate(-45deg);
        z-index: -3;
      }

    }



`;



const ContactForm = styled.div`
    ${FormStyles};
`;

const Form = ({ children }) => {
  console.log('ContactForm');

  return (
    <ContactForm>
      {children}
    </ContactForm>
  )
};


const form = {
  name: 'wpcf7',
  priority: 10,
  test: ({ component, props }) => component === "div" && (props.className && props.className.includes("wpcf7")),
  processor: ({ node, props }) => {

    const children = node.children;

    return {
      component: Form,
      props: { children },
    }
  },
}

export default form;