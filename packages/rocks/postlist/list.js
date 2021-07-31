import { connect, styled, decode } from "frontity";
import { Container, Row, Col } from "pebbles/grid";
import Item from "./list-item";
import Pagination from "./pagination";

const PostList = ({ state }) => {

  // Get the data of the current url/list
  const data = state.source.get(state.router.link);

  // console.log("@postlist/list: data", data);

  return (
    <StyledMain className="container">

      <Container>

        <Row>
          <Col className="p-4">
            <PageHead className="mb-2 text-center">
              Cavetalk
            </PageHead>
          </Col>
        </Row>

        {/* If the list is a taxonomy, render a title. */}
        {data.isTaxonomy && (
          <Header>
            {data.taxonomy}:{" "}
            <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
          </Header>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <Header>
            Posts by: <b>{decode(state.source.author[data.id].name)}</b>
          </Header>
        )}

        {/* Iterate over the array of objects (list items). */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each.
          return <Item key={item.id} item={item} />;
        })}

      </Container>

      <Pagination />

    </StyledMain>

  );
};

export default connect(PostList);

const StyledMain = styled.main`
  background-color: transparent;

  h2 {
    font-family: "Playfair Display";
  }
`;

const PageHead = styled.h1`
  color: rgba(12, 17, 43, 0.7);
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.6;
  text-shadow: 1px 1px rgba(173,216,230,.5)
`;

const Header = styled.h2`
  color: rgba(12, 17, 43, 0.9);
  font-weight: 300;
  text-transform: capitalize;
`;
