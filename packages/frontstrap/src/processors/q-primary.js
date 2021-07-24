import React from 'react'
import { styled } from "frontity";
//import { themecolor } from "../components/dust/_colors";

// dupe - needs moving
const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const PrimaryStyles = () => `
  border-left: 4px solid ${hexToRGB('#87af4e', 0.8)};

  p {
    color: ${hexToRGB('#87af4e', 0.8)}; 
    box-shadow: 0 -6px 0 ${hexToRGB('#87af4e', 0.2)}; 
  }

  &::before {
    content: "";
    height: 500px;
    width: 500px;
    
    position: absolute;
    top: -50px;
    left: -50px;
    border-left: 5px solid ${hexToRGB('#87af4e', 0.1)};
    border-radius: 50% 50% 50% 50%;
    z-index: -1;
    overflow:hidden;
  }

  &::after {
    background: ${hexToRGB('#87af4e', 0.8)};
  }
`;


const BlockQuotePrimary = styled.blockquote`
    ${PrimaryStyles};
`;

const QuotePrimary = ({ quote, author }) => {
  console.log('pQuote');
  console.log({ quote, author })

  return (
    <BlockQuotePrimary>
      <p>{quote ? quote : 'Silence is golden'}</p>
      <cite>{author ? author : 'Anna a Mouse'}</cite>
    </BlockQuotePrimary>
  )
};

const quote = {
  name: 'q-primary',
  priority: 10,
  test: ({ component, props }) => component === "blockquote" && props.className.includes("q-primary"),
  processor: ({ node }) => {

    const quote = node.children[0].children[0].content;
    const author = node.children[1].children[0].content;
    //const quoteStyle = props.className.includes("q-primary") ? QuotePrimary : QuoteSecondary;

    return {
      component: QuotePrimary,
      props: { quote, author },
    }
  },
}

export default quote;