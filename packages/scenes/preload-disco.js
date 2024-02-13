import React from 'react';
import { styled } from "frontity";
import { grow } from "./glamourmagic";

const DiscoLoader = ({message}) => {

  return (
    <StyledDiscoLoader>
      <div><p>{ message ? message : "loading..." }</p></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </StyledDiscoLoader>
  )
};

export default DiscoLoader;

const StyledDiscoLoader = styled.div`
  ul{
    margin:0 auto;
    padding:0;
    display:flex;
    justify-content: center;
  }
  ul li {
    list-style:none;
    width: 30px;
    height: 30px;
    background:#fff;
    border-radius:50%;
    animation: ${grow} 1.6s ease-in-out infinite;
  }

  ul li:nth-of-type(1){
    animation-delay:-1.4s;
    background: var(--bs-color-primary);
    box-shadow:0 0 30px var(--bs-color-primary);
    opacity:0.8;
  }
  ul li:nth-of-type(2){
    animation-delay:-1.2s;
    background: var(--bs-color-primary);;
    box-shadow:0 0 30px var(--bs-color-primary);
    opacity:0.9;
  }
  ul li:nth-of-type(3){
    animation-delay:-1s;
    background: var(--bs-color-primary);
    box-shadow:0 0 30px var(--bs-color-primary);
  }
  ul li:nth-of-type(4){
    animation-delay:-0.8s;
    background: var(--bs-color-primary);
    box-shadow:0 0 30px var(--bs-color-primary);
  }
  ul li:nth-of-type(5){
    animation-delay:-0.6s;
    background: var(--bs-color-primary);
    box-shadow:0 0 30px var(--bs-color-primary);
    opacity:0.9; 
  }
  ul li:nth-of-type(6){
    animation-delay:-0.4s;
    background: var(--bs-color-primary);
    box-shadow:0 0 30px var(--bs-color-primary);
    opacity:0.8;
  }

`;

// kudos: based on original codepen by Maryam
// https://codepen.io/maryamali/pen/aQMEep