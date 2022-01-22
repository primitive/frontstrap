import { connect, styled, css, loadable } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@primitive/pebbles/heading";

import { Tabs, Tab } from "react-bootstrap";

import { underlinewoosh } from "@primitive/scenes/glamourmagic";
//const DataMap = loadable(() => import("@primitive/scenes/datamap"));


const TabBlock = ({ state }) => {

  return (
    <StyledSection
      className="mt-5 mb-5"
      images={[state.theme.config.tabs.one.bgimg, state.theme.config.tabs.two.bgimg, state.theme.config.tabs.three.bgimg, state.theme.config.tabs.four.bgimg]}
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
                  <Heading level="h3" text={state.theme.config.tabs.one.title1} />
                  <Blurb>{state.theme.config.tabs.one.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.one.title2} />
                  <Blurb>{state.theme.config.tabs.one.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.one.title3} />
                  <Blurb>{state.theme.config.tabs.one.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.one.title4} />
                  <Blurb>{state.theme.config.tabs.one.text4}</Blurb>
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
                  <Heading level="h3" text={state.theme.config.tabs.two.title1} />
                  <Blurb>{state.theme.config.tabs.two.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.two.title2} />
                  <Blurb>{state.theme.config.tabs.two.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.two.title3} />
                  <Blurb>{state.theme.config.tabs.two.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.two.title4} />
                  <Blurb>{state.theme.config.tabs.two.text4}</Blurb>
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
                  <Heading level="h3" text={state.theme.config.tabs.three.title1} />
                  <Blurb>{state.theme.config.tabs.three.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title2} />
                  <Blurb>{state.theme.config.tabs.three.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title3} />
                  <Blurb>{state.theme.config.tabs.three.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title4} />
                  <Blurb>{state.theme.config.tabs.three.text4}</Blurb>
                </TextWrap>

                { /* <DataMap /> */}

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
                  <Heading level="h3" text={state.theme.config.tabs.three.title1} />
                  <Blurb>{state.theme.config.tabs.three.text1}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title2} />
                  <Blurb>{state.theme.config.tabs.three.text2}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title3} />
                  <Blurb>{state.theme.config.tabs.three.text3}</Blurb>
                </TextWrap>

                <TextWrap>
                  <Heading level="h3" text={state.theme.config.tabs.three.title4} />
                  <Blurb>{state.theme.config.tabs.three.text4}</Blurb>
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

  /* sk-dev: styled Tab doesn't work */

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
    margin-bottom: .3rem;
    display: inline-block;
    overflow: hidden;
    color: ivory;
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
  .tab-three { background-image: url(${props => props.images[2]}); }
  .tab-four { background-image: url(${props => props.images[3]}); }

`;

const StlyedTabNav = styled(Tabs)`

  font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
  letter-spacing: 1px;
  justify-content: center;

  .nav-item {
    font-size: 1.2rem;
    color: #87af4e;

    &:hover {
      color: #111;
      background-color: rgba(135,175,78,.1);
      border-bottom-color: rgb(135,175,78);
    }
  }

  .nav-item.show.nav-link,
  .nav-link.active { 
    border-bottom: 0;
    color: #111;
    background-color: #87af4e;
  }

  @media screen and (max-width: 576px) {

    .nav-item {
      margin-bottom: .9rem;
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
    color: ivory;
`;