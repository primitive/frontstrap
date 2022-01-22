import { connect, styled } from "frontity";
import { Container, Row, Col } from "@primitive/pebbles/grid";
import PostMagic from "@primitive/scenes/postmagic";
import { sortBy } from "./utils"
import Marker from "./cpt-item-marker";

// a connected Frontity component to display custom post types:
const Timeline = ({ state, actions }) => {

  const data = state.source.get(state.router.link);

  console.log("@cpt-timeline: state", state);
  //console.log("@cpt-timeline: data.items", data.items);

  // sk-dev: tbc where/when best to filter/sort 
  data.items.sort(sortBy("year"));

  // return content to render
  return (
    <main>

      <PageHeader>
        <Container>
          <Row>
            <Col>
              <h1><span className="scribe">The Evolution of </span>Digital Stuff &amp; Other Things</h1>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <Container>

        {/* If the list is a taxonomy, render a title. */}
        {data.isTaxonomy && (
          <TimelineHeader>
            {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
          </TimelineHeader>
        )}

        {/* Sort available data items */}


        {/* PostMagic display - iterate over the items of the list. */}
        <PostMagic items={data.items} />

        {/* Regular display - iterate over the items of the list. */}
        {
          /*
          data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <Item key={item.id} item={item} />;
          })
          */
        }

        <Midground>
          {/* relative marker display - iterate over items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // render one Marker component for each item.
            return <Marker key={item.id} item={item} />;
          })}
        </Midground>

      </Container>


      {/*<Pagination />*/}

    </main>
  );

  //}

};

export default connect(Timeline);



const PageHeader = styled.header`
  .container {

  
    div {
      margin-top: 1rem;
      padding: 1rem;
      
      text-align: center;

      color: ivory;

      background: rgba(12,17,43,0.9);
      border-radius: 5rem;

  
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

const Midground = styled.div`
  z-index: -10;
`;