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

      font-family: 'Helvetica', 'Arial', sans-serif;
      
      background: #26D0CE linear-gradient(to top, var(--bs-green), #26d0ce);
      box-shadow: 1px 4px 8px rgba(0,0,0, .3);
      border-radius: .33rem;

      label {
        display: block;
        margin: 0;
        padding: .6rem 1rem .4rem;
        background-color: rgba(var(--bs-dark-rgb), .3);
        background-image: linear-gradient(0, rgba(var(--bs-dark-rgb), .3) 0%, rgba(var(--bs-dark-rgb), .1) 100%);
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        color: var(--bs-white);
        font-family: var(--pd-font-family-sans-cond);
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
      select {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0;
        border: none;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;
        width: 100%;
        background-color: white;
        background-image: linear-gradient(180deg, rgba(227, 255, 231, .6) 0%, rgba(217, 231, 255, .6) 100%);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

      }

      .btn {
        width: 100%;
        background: rgb(var(--bs-dark-rgb));
        border-color: rgb(var(--bs-dark-rgb));
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

      span[class*="-NotValidTip"]{
        display: inline-block;
        padding: .2rem;
        color: var(--bs-danger);
        background: var(--bs-danger-bg-subtle);
        border-radius: var(--bs-border-radius-sm);
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
        background: ivory;
        background: linear-gradient(to right, #c3d7a6, #f3f7ed);
        opacity: .5;
  
        transform: rotate(-45deg);
        z-index: -3;
      }

    }

    .error-message {
      margin-top: .3rem;
      color: var(--bs-danger);
      background: var(--bs-danger-bg-subtle);
      border-color: var(--bs-danger-border-subtle);
      border-radius: var(--bs-border-radius);
    }
    .success-message {
      margin-top: .2rem;
      color: var(--bs-success);
      background: var(--bs-success-bg-subtle);
      border-color: var(--bs-success);
      border-radius: var(--bs-border-radius);
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