import React from "react";
  
const Heading = ({ level, text, icon }) => {

  const defaultTitle = `Default ${level ? level : 'h2'} Title`;
  const content = text ? text : defaultTitle;

  const weight = {
    h1: <h1 dangerouslySetInnerHTML={{__html: content }} />,
    h2: <h2 dangerouslySetInnerHTML={{__html: content }} />,
    h3: <h3 dangerouslySetInnerHTML={{__html: content }} />,
    h4: <h4 dangerouslySetInnerHTML={{__html: content }} />,
    h5: <h5 dangerouslySetInnerHTML={{__html: content }} />,
    h6: <h6 dangerouslySetInnerHTML={{__html: content }} />
  };

  const header = level ? weight[level] : weight.h2;

  return header;

};

export default Heading;
