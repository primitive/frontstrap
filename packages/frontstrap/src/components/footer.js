import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { Container, Row, Col } from "@primitive/pebbles/grid";
import BackToTop from "@primitive/pebbles/backtotop";
import Colophon from "@primitive/pebbles/credits";

const Footer = ({ state }) => {

  const colors = state.theme.colors,
        display = state.theme.config.footer;

  return (
    <SiteFooter
      role="contentinfo"
      bg={display.bg3}
      color={display.color3}
      hover={colors.secondary}
    >

      <Container className="p-5">

        <Row>
          <Col md={5} className="pb-5 mx-auto">
            <ul className="list-group">
              {state.theme.menufooter.map(([name, link]) => (
                <li key={name} className="list-group-item">
                  <Link link={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Colophon content={display} />
        </Row>

        <Row className="pt-4">
          <Col className="text-center">
            <BackToTop />
          </Col>
        </Row>
      </Container>

    </SiteFooter>
  );
};

export default connect(Footer);


const SiteFooter = styled.footer`
  background-color: ${(props) => props.bg ? props.bg : 'darkslategray'};
  color: ${(props) => props.color ? props.color : 'beige'};

  .list-group-item {
    text-align: center;
    background-color: rgba(0,0,0,.125);
    border: 1px solid rgba(0,0,0,.125);

    &:hover {
      background-color: rgba(0,0,0,.250);
    }
  }

  a {
    color: ${(props) => props.color ? props.color : 'ivory'};
    &:hover {
      color: ${(props) => props.hover ? props.hover : 'gold'};
      text-decoration: none;
    }
  }
`;