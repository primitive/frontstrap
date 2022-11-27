import React from 'react'
import { styled } from "frontity";
import { hexToRGBcss } from "../components/sand/color-utils";
//import { themecolor } from "../components/dust/_colors";

const PrimaryStyles = () => `
  border-left: 4px solid ${hexToRGBcss('#87af4e', 0.8)};

  p {
    color: ${hexToRGBcss('#87af4e', 0.8)}; 
    box-shadow: 0 -6px 0 ${hexToRGBcss('#87af4e', 0.2)}; 
  }

  &::before {
    content: "";
    height: 500px;
    width: 500px;
    
    position: absolute;
    top: -50px;
    left: -50px;
    border-left: 5px solid ${hexToRGBcss('#87af4e', 0.1)};
    border-radius: 50% 50% 50% 50%;
    z-index: -1;
    overflow:hidden;
  }

  &::after {
    background: ${hexToRGBcss('#87af4e', 0.8)};
  }
`;

const SecondaryStyles = () => `
  border-left: 4px solid ${hexToRGBcss('#eb966c', 0.8)}; 

  p {
    box-shadow: 0 -6px 0 ${hexToRGBcss('#eb966c', 0.2)}; 
    color: ${hexToRGBcss('#eb966c', 0.8)}; 
  }

  &::before {
    border-left: 5px solid ${hexToRGBcss('#eb966c', 0.1)};
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
    background: ${hexToRGBcss('#eb966c', 0.8)};
  }
`;

const BlockQuotePrimary = styled.blockquote`
    ${PrimaryStyles};
`;

const BlockQuoteSecondary = styled.blockquote`
    ${SecondaryStyles};
`;

const QuotePrimary = ({ quote, author }) => {
  // console.log('QuotePrimary');
  // console.log({ quote, author });

  return (
    <BlockQuotePrimary>
      <p>{quote ? quote : 'Silence is golden'}</p>
      <cite>{author ? author : 'Anna a Mouse'}</cite>
    </BlockQuotePrimary>
  )
};

const QuoteSecondary = ({ quote, author }) => {

  return (
    <BlockQuoteSecondary>
      <p>{quote ? quote : 'Silence is golden'}</p>
      <cite>{author ? author : 'Anna a Mouse'}</cite>
    </BlockQuoteSecondary>
  )
};


const quote = {
  name: 'quote',
  priority: 10,
  test: ({ component, props }) => component === "blockquote" && (props.className.includes("q-book")),
  processor: ({ node, props }) => {

    const quote = node.children[0].children[0].content;
    const author = node.children[1].children[0].content;
    const quoteStyle = props.className.includes("q-primary") ? QuotePrimary : QuoteSecondary;

    return {
      component: quoteStyle,
      props: { quote, author },
    }
  },
}

export default quote;