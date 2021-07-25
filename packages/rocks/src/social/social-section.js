import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "primitivepebbles/grid";
import InstagramPost from "./instgram-post";
import FacebookPage from "./facebook-page";
import FacebookLike from "./facebook-like";
import Icon from 'react-fontawesome';

const Social = ({ state }) => {

  // Get social config from state
  const display = state.theme.config.social;
  const instagram = display.instagram;
  const facebook = display.facebook;
  const twitter = display.twitter;

  return (
    <SocialSection
      bg={display.bg}
      color={display.color}
      xborder="6px solid #e8e6cf"
    >

      <Container className="text-center mt-4">

        <Row>
          <Col className="p-5">
            <SocialIcons
              className="pt-5 pb-5"
              color={display.color}
              >
              <h3 className="heading">let'z b friends 4eva</h3>
              <ul className="nav justify-content-center">
                <li className="nav-item p-1"> <Icon name="instagram" /> <a href={instagram.url} target="_blank">Instagram </a></li>
                <li className="nav-item p-1"> <Icon name="facebook" /> <a href={facebook.url} target="_blank">Facebook </a></li>
                <li className="nav-item p-1"> <Icon name="twitter" /> <a href={twitter.url} target="_blank">Twitter </a></li>
              </ul>
            </SocialIcons>
          </Col>
        </Row>

        <Row>
          { /* If instagram has data */}
          {(instagram && "posts" === instagram.type) && (
            instagram.postids.map((item) => {
              return (<Col key={item}><InstagramPost id={item} maxwidth={instagram.maxwidth} /></Col>);
            })
          )}
          {(instagram && "feed" === instagram.type) && (
            <div>Feed to do </div>
          )}
        </Row>

        <Row>
          { /* If facebook has data  */}
          {(facebook && "none" !== facebook.type) && (
            "page" === facebook.type && <Col><FacebookPage /></Col> ||
            "like" === facebook.type && <Col><FacebookLike props={facebook.settings} /></Col>
          )}
        </Row>

      </Container>
    </SocialSection>
  );
};

export default connect(Social);

const SocialSection = styled.section`
  color: ${(props) => props.color ? props.color : 'black'};
  background: ${(props) => props.bg ? props.bg : 'ivory'};
  border-top: ${(props) => props.xborder ? props.xborder : 'none'};;
  border-bottom: ${(props) => props.xborder ? props.xborder : 'none'};
`;

const SocialIcons = styled.div`
  font-family: "Hepta Slab";
  text-shadow: 1px 1px rgba(173,216,230,.5);
  border: solid 3px rgba(0,44,44,.3);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

  a {
    color: ${(props) => props.color ? props.color : 'black'};
    text-decoration: none;
  }
`;