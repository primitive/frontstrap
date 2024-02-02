import { connect, styled, css, loadable } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@primitive/pebbles/heading";

import { Tabs, Tab } from "react-bootstrap";

import { underlinewoosh } from "@primitive/scenes/glamourmagic";
import DataMap from "@primitive/scenes/datamap";


const TabBlock = ({ state }) => {

  const display = state.theme.config.tabs;

  return (
    <StyledSection
      className="mt-5 mb-5"
      images={[display.one.bgimg, display.two.bgimg, display.three.bgimg, display.four.bgimg]}
    >

      <Container fluid className="mx-0 px-0">

        <StlyedTabNav
          id="hp-tabs"
          defaultActiveKey="tab-one"
          role="tablist"
          aria-label="Tabs"
        >

          <Tab title="Design"
            eventKey="tab-one"
            className="tab-one mx-auto"
          >
            <Row>

              <Col>

                <TextWrap>
                  <Heading level="h3" text={display.one.title1} />
                  <Blurb>{display.one.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.one.title2} />
                  <Blurb>{display.one.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.one.title3} />
                  <Blurb>{display.one.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.one.title4} />
                  <Blurb>{display.one.text4}</Blurb>
                </TextWrap>

              </Col>

            </Row>
          </Tab>

          <Tab title="Development"
            eventKey="tab-two"
            className="tab-two mx-auto"
          >
            <Row>

              <Col>

                <TextWrap>
                  <Heading level="h3" text={display.two.title1} />
                  <Blurb>{display.two.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.two.title2} />
                  <Blurb>{display.two.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.two.title3} />
                  <Blurb>{display.two.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.two.title4} />
                  <Blurb>{display.two.text4}</Blurb>
                </TextWrap>

              </Col>

            </Row>
          </Tab>

          <Tab title="Data"
            eventKey="tab-three"
            className="tab-three mx-auto"
          >
            <Row>

              <Col>

                <TextWrap>
                  <Heading level="h3" text={display.three.title1} />
                  <Blurb>{display.three.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.three.title2} />
                  <Blurb>{display.three.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.three.title3} />
                  <Blurb>{display.three.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.three.title4} />
                  <Blurb>{display.three.text4}</Blurb>
                </TextWrap>

                <DataMap />

              </Col>

            </Row>
          </Tab>

          <Tab title="Marketing"
            eventKey="tab-four"
            className="tab-four mx-auto"
          >

            <Row>

              <Col>

                <TextWrap>
                  <Heading level="h3" text={display.four.title1} />
                  <Blurb>{display.four.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.four.title2} />
                  <Blurb>{display.four.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.four.title3} />
                  <Blurb>{display.four.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={display.four.title4} />
                  <Blurb>{display.four.text4}</Blurb>
                </TextWrap>

              </Col>

            </Row>
          </Tab>

        </StlyedTabNav>

      </Container>
    </StyledSection>
  )
};

export default connect(TabBlock);

const StyledSection = styled.section`

  .tab-content {
    border-top: 6px solid #87af4e;
    background-color: black;
  }

  .tab-pane {
    padding: 2rem;
    width: 100%;
    max-height: 700px;
    max-width: 1140px;

    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
  }

  h3 {
    margin-bottom: 0;
    padding-left: 5px;
    display: inline-block;
    overflow: hidden;
    color: var(--bs-white);
    font-size: 3rem;
    font-weight: normal;
  }
  h3:after {
    content: " ";
    margin-top: .6rem;
    width: 33%;
    height: 9px;
    display: block;
    will-change: transform;
    transition: 1.5s;
    background:#87af4e;
  }
  .tab-pane:hover h3:after {
    transition: 1s;
    width: 400%;
    height: 4px;
    animation: ${underlinewoosh} 6s linear infinite;
    background-image: linear-gradient(90deg, rgba(122, 95, 255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
  }

  .tab-one { background-image: url(${props => props.images[0]}); }
  .tab-two { background-image: url(${props => props.images[1]}); }
  .tab-three { position: relative; }
  .tab-four { background-image: url(${props => props.images[3]}); }

`;

const StlyedTabNav = styled(Tabs)`

  font-family: var(--pd-font-family-news);
  letter-spacing: 1px;
  justify-content: center;
  border-bottom: 0;

  .nav-item {
    font-size: 1.2rem;
    color: #87af4e;
  }

  .nav-link {
    color: #799d46;
    border: 0;
    border-bottom: 3px solid #87af4e;
    background-color: rgba (0,0,0,.33);
    transition: 0.66s;
    will-change: background-color;

    &:hover {
      color: #435727;
      background-color: rgba(135,175,78,.1);
      border-bottom-color: rgb(135,175,78);
    }
  }
  .nav-link.active { 
    border-bottom-color: #435727;
    color: #435727;
    background-color: #87af4e;
  }


  @media screen and (max-width: 576px) {

    margin-left: .3rem;
    margin-right: .3rem;

    .nav-link {
      width: 100%;
      border-radius: .25rem;
    }

    .nav-item {
      margin-bottom: .3rem;
      width: 49%;
      border-radius: .25rem;
      font-size: 1rem;
      text-align: center;
  
      &:hover {
        border-bottom-color: rgb(135,175,78);
        border-right-color: rgb(135,175,78);
      }
    }

    .nav-item:nth-of-type(odd) {
      margin-right: 2%;
    }
  }
`;


const TextWrap = styled.div`
  display: block;
  position: relative;
  z-index: 20;
  overflow: hidden;
  text-shadow: 1px 1px 1px #000;
`;

const Blurb = styled.p`
    padding-left: 5px;
    color: var(--bs-white);
    font-family: var(--pd-font-family-sans-cond);
    font-size: 1.2rem;
    letter-spacing: 1px;
`;