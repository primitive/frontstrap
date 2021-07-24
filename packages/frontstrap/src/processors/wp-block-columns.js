import React from 'react'
import { Row, Col } from "pebbles/grid";
//import { styled } from "frontity";
//const StyledRow = styled(Row)``;

const wpBlockColumns = ({ columns }) => {

  console.log({ columns });
  const col1 = columns[0];
  const col2 = columns[1];

  console.log( col1 );
  let col3, col4;

  if (col1.length > 0) {
    col3 = col1.map((child) => child.component).join(",");
    col4 = col1.map((child) => child.children[0].content).join(",");
    //col3 = col1.join("");
  }
  console.log( col3 );
  console.log( col4 );

  return (
    <Row className="wp-block-columns mb-4">
      <Col className="col-md-6">
        {"test"}
      </Col>
      <Col className="col-md-6">
        {"test"}
      </Col>
    </Row>
  )
};


const wpColumns = {
  name: 'wp-block-columns',
  priority: 11,
  test: ({ component, props }) => component === "div" && (props.className && props.className.includes("wp-block-columns")),
  processor: ({ node }) => {

    //console.log('node:', node.children[0].children);
    //const wpColumns = node.children[0].children[0].content;
    //const col2 = node.children[1].children[0].content;

    const col1 = node.children[0].children;
    const col2 = node.children[1].children;
    const columns = [col1, col2];

    //const col4 = Object.keys(col1kids).map(i => col1kids[i]);
    //const col2 = Object.keys(col2kids).map(j => col2kids[j]);

    //const col1 = "test";
    //const col2 = "test2"

    return {
      component: wpBlockColumns,
      props: { columns },
    }
  },
}

export default wpColumns;