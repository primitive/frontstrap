import { useEffect, useMemo } from 'react';
import { connect, styled } from "frontity";
import { Container, Row, Col } from "@primitive/pebbles/grid";

import DiscoPreload from "@primitive/scenes/preload-disco"

import Post from "./cpt-works-item";

// Function to shuffle array
const shuffle = (arr, n) => {
  // Guard clause to check if arr is falsy or not an array
  if (!arr || !Array.isArray(arr)) {
    return [];
  }

  // Shuffle the array using Fisher-Yates algorithm
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, n);
}


// component uses "connect":
const PostStrip = ({ state, actions, props }) => {

  // use props or set defaults (hmmm, do I want to use prop-types)
  const posttype = props.posttype ? props.posttype : "works";
  const display = props.mode ? props.mode : "recent";
  const max = props.limit ? props.limit : 3;
  const title = props.title ? props.title : "Recent Posts";
  const subtitle = props.subtitle ? props.subtitle : "From our Blog";
  const icon = props.icon ? props.icon : null;

  // get skeletal data model for posttype or default cpt 'works'.
  const data = state.source.get("/works/");
  //const data = state.source.get("/" + posttype + "/");

  useEffect(() => {
    actions.source.fetch("/works/");
    //actions.source.fetch(`/${posttype}/`);
    //actions.source.fetch("/"+posttype+"/");

    if (state.theme.debug) {
      console.log("@post-strip: data", data);
    }

  }, [data]);

// switch between recent, random, related posts
// diplaySwitch is a memoized value
  const displaySwitch = useMemo(() => {
    switch (display) {
      case 'recent':
        return data.items.slice(0, max);
      case 'random':
        return shuffle(data.items, max);
      case 'related':
        return shuffle(data.items, max);
      default:
        return data.items.slice(0, max);
    }
  }, [display, data.items, max]);

  if (!data.isReady) return <Loading><DiscoPreload message="loading works..." /></Loading>;

  return (
    <StripPosts>
      <Content>
        <Header className="row">
          <Col>
            <Title>{title}</Title>
            <SectionSubTitle>{subtitle}</SectionSubTitle>
          </Col>
        </Header>

        <Row>


          {displaySwitch.map(({ type, id }) => {
            const item = state.source[type][id];

            // 3. Render one post/cpt item component for each item.
            return <Post key={item.id} item={item} />;

          })}

        </Row>
      </Content>
    </StripPosts>
  );
};

export default connect(PostStrip);

const Loading = styled.div`
  padding: 3rem;
  font-size: 1rem;
  text-align: center;
`;

const StripPosts = styled.section`
  
`;

const Content = styled(Container)`
  margin-bottom: 3rem;
`;

const Header = styled.header`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
`;

const Title = styled.h3`
  margin-bottom: 1.2rem;
  font-family: var(--pd-font-family-news);
  font-weight: bold;
  text-align: center;
  color: rgba(12, 17, 43, 0.9);

  &:after {
    display: block;
    content: " ";
    margin: 1.2rem auto 0;
    width: 5rem;
    height: 3px;
    background: #019573;
  }
`;

const SectionSubTitle = styled.p`
  font-family: var(--pd-font-family-brush);
  color: rgba(12,17,43,0.8);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
