import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { Container, Row, Col } from "@primitive/pebbles/grid";

const FurryBoots = ({ state }) => {

  const display = state.theme.config.footer;
  if (!display) { return null }

  return (

      <FooterCTA
        bg={display.bg1}
        color={display.color1}
        role="complementary"
        className="pt-4 pb-4 text-center">
        <Container>
          <Row>
            <Col>
              <h2 className={display.fontfamily}>
                <span>{display.text1}</span>
                {display.text2}
                <strong>{display.text3}</strong>
                {display.text4}
              </h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <Image
                src={display.image}
                alt={display.title}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className={display.fontfamily}>
                <small>{display.contact.prompt}</small>
                <strong>{display.contact.info}</strong>
                {display.contact.incentive}
              </h3>
            </Col>
          </Row>

        </Container>
      </FooterCTA>
  );
};

export default connect(FurryBoots);

const FooterCTA = styled.section`

  background-color: ${(props) => props.bg ? props.bg : '#D4AEA6'};

  h2 {
    padding: 2rem 0 1rem;
    font-family: var(--pd-font-family-display);
    color: ${(props) => props.color ? props.color : '#765751'};
    text-align: center;
    line-height: 5rem;
    font-size: 3rem;

    span {
      display: block;
      font-family: var(--pd-font-family-serif);
      color: ${(props) => props.color ? props.color : '#765751'};
      font-size: 5rem;
    }

    strong {
      display: block;
      padding-bottom: 0;
      font-family: var(--pd-font-family-news);
      font-size: 4rem;
      line-height: 4rem;
    }

  }

  h3 {
    padding: 1rem 0;
    color: ${(props) => props.color ? props.color : '#765751'};
  }

  strong,
  h3 a {
    display: block;
    padding-bottom: 1.5rem;
    font-size: 4rem;
    color: ${(props) => props.color ? props.color : '#765751'};
  }

  img {
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;

    transition: transform .8s ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 576px) {
    h2 { font-size: 5rem; }
    h2 span { font-size: 4rem; line-height: 1.4;}
    h2 strong {font-size: 6rem; line-height: .7;}
    h3 strong, h3 a { font-size: 3rem; }
  }

  @media screen and (min-width: 768px) {
    h2 { font-size: 6rem; }
    h2 span { font-size: 5rem; line-height: 1.6;}
    h2 strong {font-size: 7rem; line-height: .8;}
    h3 strong, h3 a { font-size: 4rem; }
  }

  @media screen and (min-width: 992px) {
    h2 { font-size: 7rem; }
    h2 span { font-size: 6rem; line-height: 1.9;}
    h2 strong {font-size: 7rem; line-height: .9;}
    h3 strong, h3 a { font-size: 5rem; }
  }
`;