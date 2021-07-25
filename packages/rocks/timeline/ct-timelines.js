import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "primitivepebbles/grid";
import CustomTaxonomyItem from "./ct-item";

const setTitle = (ctname) => {
  if (ctname === "timelines") {
    return (<h1><span className="scribe">Adventures in...</span> Time</h1>);
  }

  ctname = ctname.replace("-", ' ');
  return (<h1><span className="scribe">Evolution of... </span> {ctname}</h1>);
}

// a connected Frontity component to display custom taxonomies:
const Timelines = ({ state, actions }) => {

  /*
    Hello, what we workin with?
    : get data skeleton / retrieve info about what kind of content should be rendered for the current path in frontity state.

  */

  const data = state.source.get(state.router.link);

  useEffect(() => {

    /*

      Request delivery of full skeleton.
    
      : fetch data related to a path using side effects is similar to calling on ComponentDidMount
      : this action fetches all entities related to a link, i.e. the pathname of a URL in your site.

   
      async function fetchData() {
        await actions.source.fetch(state.router.link)
      }
      fetchData();

       */

      actions.source.fetch(state.router.link);

  }, []);

  console.log("@ct-timelines: data", data);
  //console.log("@ct-timelines: data", state.source[data.taxonomy]);
  //console.log("@ct-timelines: state.source", state.source);
  //console.log("@ct-timelines: data", data.items);

  /*

    Now Let's Dress it!

  */

  return (
    <EventTimelines className="container-fluid">

      <PageHeader>
        <Container>
          <Row>
            <Col>
              {setTitle(data.taxonomy)}
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <PageBody>
        <Container>

          <Row>
            <Col>
              {data.items.map(({ type, id }) => {
                const item = state.source.timelines[id];

                return <CustomTaxonomyItem key={item.id} item={item} type={type} />
              })}
            </Col>
          </Row>

        </Container>
      </PageBody>

    </EventTimelines>
  );
};

export default connect(Timelines);

  /*

    Vally of the wardrobe mistress

  */

const EventTimelines = styled.main`
  background-color: transparent;
`;

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

const PageBody = styled.main`
  max-width: 80%;
  margin: 0 auto 5rem;

  .card {
    margin-top: 2rem;
    padding: .5rem;
    border-radius: 50%;
    box-shadow: 1px 2px 6px rgba(12,17,43,0.3);
  }
`;