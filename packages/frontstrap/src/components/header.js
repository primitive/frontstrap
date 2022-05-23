import { connect, styled, css } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Link from "@frontity/components/link";
import Nav from "@primitive/rocks/nav";
//import Nav from "./nav";
//import MobileMenu from "./menu";

import { mq } from "@primitive/pebbles/grid";
//import { colors } from "../dust/_colors.js";

const Header = ({ state }) => {

  return (
    <HeadWrapper variant={state.theme.config.header.variant}>
      <div className="mast">
        <Container>
          <Row className="justify-content-sm-end">
            <Col className="col-11 col-md-7">
              <StyledLink link="/web-design/" className="pl-4">

                <Title
                  color=""
                  className="news mb-0 pb-0"
                >
                  {state.frontity.title}
                </Title>

                <Intro className="subslab mb-0">
                  {state.frontity.phrase1}
                  <span className="slab"> {state.theme.config.header.random} </span>
                </Intro>

                <Description>
                  {state.frontity.tagline}
                </Description>
                
              </StyledLink>
            </Col>
          </Row>
        </Container>
        <Nav />
      </div>
    </HeadWrapper>
  );
};

export default connect(Header);


// Assets
const headGraphic = {
  light: 'url(https://primitivedigital.uk/wp-content/uploads/header/light.jpg)',
  dark: 'url(https://primitivedigital.uk/wp-content/uploads/header/dark.jpg)',
  darkx2: 'url(https://primitivedigital.uk/wp-content/uploads/header/dark@2x-scaled.jpg)',
  default: 'url(https://primitivedigital.uk/wp-content/uploads/header/default.jpg)',
  green: 'url(https://primitivedigital.uk/wp-content/uploads/header/website_header@2x.jpg)'
};

const ResponsiveLight = css(
  mq({
    transform: ['scaleX(-1)', 'scaleX(-1)', 'none', 'none', 'none'],
    backgroundSize: ['cover', 'cover', 'cover', 'cover', 'contain'],
    backgroundImage: [headGraphic.light, headGraphic.light, headGraphic.light, headGraphic.light, headGraphic.light],
    backgroundPositionY: ['4rem', '4rem', '4rem', '4rem', '4rem'],
    backgroundPositionX: ['calc(50% - 12rem)','calc(50% - 15rem)', 'center', 'center', 'center']
  })
);

const HeadLight = css`
  background-color: #e1dfda;
  color: darkslategray;

  text-shadow: 1px 1px 2px rgba(0,0,0,.1);
  border-bottom: 3px solid rgba(12,17,43,1);
  
  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-repeat: no-repeat;

      ${ResponsiveLight};
    }
  }
`;


const ResponsiveDark = css(
  mq({
    transform: ['scaleX(-1)', 'scaleX(-1)', 'scaleX(-1)', 'none', 'none'],
    backgroundSize: ['cover', 'cover', 'cover', 'cover', 'contain'],
    backgroundImage: [headGraphic.dark, headGraphic.dark, , headGraphic.dark, headGraphic.dark, headGraphic.dark],
    backgroundPositionY: ['4rem','4rem', '4rem', '4rem', '4rem'],
    backgroundPositionX: ['calc(50% + 5rem)','calc(50% + 5rem)', 'calc(80% + 8rem)', 'calc(50% + 15rem)', 'calc(50% + 13rem)']
  })
);

const HeadDark = css`
  background-color: black;
  color: ivory;

  text-shadow: 1px 1px 2px #477C16;
  border-bottom: 3px solid rgba(12,17,43,1);

  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-repeat: no-repeat;

      ${ResponsiveDark};
    }
  }
`;



const ResponsiveDefault = css(
  mq({
    transform: ['none', 'none', 'scaleX(-1)', 'none', 'none'],
    backgroundSize: ['cover', 'cover', 'cover', 'revert', 'revert'],
    backgroundImage: [headGraphic.green, headGraphic.green, headGraphic.green, headGraphic.green, headGraphic.green],
    backgroundPositionY: ['6rem', '6rem', '6rem', '6rem', '6rem'],
    backgroundPositionX: ['calc(50% + 60vw)', 'calc(50% + 5rem)', 'calc(50% + 5rem)', 'center', 'center']
  })
);

const Default = css`
  color: ivory;
  background-color: #87af4e;

  text-shadow: 1px 1px 2px #477C16;
  border-bottom: 3px solid 'rgba(12,17,43,0.9)';

  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-repeat: no-repeat;

      ${ResponsiveDefault};
    }
  }

`;

// Header variants / modifiers
const headStyle = {
  light: HeadLight,
  dark: HeadDark,
  default: Default
};


const HeadWrapper = styled.header`
  overflow: hidden;
  .mast {
    position: relative;
    z-index: 1;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  ${(props) => headStyle[props.variant] || headStyle["default"]}

`;

const Title = styled.h2`
  color: ${(props) => props.color ? props.color : 'white'};
  font-size: 4rem;

  position: relative;
  z-index: 2;
`;

const Intro = styled.p`
  color: ${(props) => props.color ? props.color : 'white'};
  font-size: 2rem;
  letter-spacing: 1px;

  position: relative;
  z-index: 2;

  span {
    color: ${(props) => props.color ? props.color : 'white'};
 }
`;

const Description = styled.h4`
  color: ${(props) => props.color ? props.color : 'ivory'};
  font-size: 1.5rem;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 2;
`;