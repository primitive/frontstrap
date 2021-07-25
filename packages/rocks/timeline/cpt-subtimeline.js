import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "primitivepebbles/grid";
import PostMagic from "scenes/postmagic";
import { sortBy } from "./utils"
//import Item from "./cpt-item";

import Pagination from "./pagination";

const setTitle = (ctname) => {
  if (ctname === "timelines") {
    return (<h1><span className="scribe">Adventures in...</span> Time</h1>);
  }
  ctname = ctname.replace("-", ' ');
  return (<h1><span className="scribe">Evolution of... </span> {ctname}</h1>);
}

// a connected Frontity component to display custom post types by custom taxonomies
const SubTimeline = ({ state, actions }) => {

  // get the data from frontity state
  const data = state.source.get(state.router.link);



  console.log("@cpt-subtimeline: data", data);
  //console.log("@cpt-subtimeline: state", state);
  //console.log("@cpt-subtimeline: actions", actions);
  //console.log("@cpt-subtimeline: data.items", data.items);

  // fe sort, to be replaced
  //data.items.sort(sortBy("year"));

  // render your content
  return (
    <main>

      <PageHeader>
        <Container>
          <Row>
            <Col>
              {data.isTimelineType ? setTitle(data.taxType) : <h1><span className="scribe">The Evolution of </span>Digital Stuff and Other Things</h1>}
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <PageBody>
        <Container>

          {/* Sort available data items */}

          {/* Animated display - iterate over the items of the list and wrap in tween component. */}
          <PostMagic items={data.items} />

          {/* Regular display - iterate over the items of the list. */}
          {
            /*
            data.items.map(({ type, id }) => {
              const item = state.source[type][id];
  
              // console.log(item);
  
              // Render one Item component for each item.
              return <Item key={item.id} item={item} />;
            })
            */
          }

        </Container>
      </PageBody>

      <Pagination />
      
    </main>
  );
};

export default connect(SubTimeline);




const PageHeader = styled.header`
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  
    div {
      margin-top: 1rem;
      padding: 1rem;
      
      text-align: center;
      color: ivory;

      background: rgba(12,17,43,0.9);
      border-radius: 5rem;

      h1 {
        font-weight: 400;
        text-transform: capitalize;
      }
  
      h1 span {
        display: block;
        color: #f79862;
        font-weight: 300;
        text-shadow: 2px 1px 1px rgba(123,76,49,0.9);
      }

      .col {
        margin-top: 0;
        padding-top: 1rem;
        margin-left: 1.2rem;
        margin-right: 1.2rem;
        border-radius: 3rem;
        border: none;
        box-shadow: 1px 2px 6px #000;
      }

    }
  }
`;

const PageBody = styled.section`
  max-width: 80%;
  margin: auto;
`;