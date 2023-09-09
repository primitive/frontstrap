import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { Container, Row, Col } from "@primitive/pebbles/grid";
//import { LabeledIcon, HeartIt, FrontityLogo, WordPress, PrimitiveLogo } from "./icons-footer";


import { heartbeat } from "@primitive/scenes/glamourmagic";



const KnobblyKnees = ({ state }) => {

  const display = state.theme.config.footer;
  if (!display) { return null }

  return (
    <FooterKudos
      bg={display.color}
      className="pt-5 pb-5 text-center"
      role="contentinfo"
    >
      <Container>

        <Row>
          <Col>
            {/* <LabeledIcon icon={PrimitiveLogo} label="" /> */}
            <Image
              alt={display.kudos.alt1}
              src={display.kudos.src1}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Image
              className="loveit"
              alt={display.kudos.alt2}
              src={display.kudos.src2}
            />
          </Col>
        </Row>

        <KissesTo className="pt-5">

          <Col>
            <Image
              alt={display.kudos.alt3}
              src={display.kudos.src3}
            />
          </Col>

        </KissesTo>

      </Container>
    </FooterKudos>
  );
};

export default connect(KnobblyKnees);

const FooterKudos = styled.div`
  background-color: ${(props) => props.bg ? props.bg : 'bisque'};

  svg, img {
    margin: 10px auto;
    max-height: 130px;
  }

  &:hover .loveit {
    animation: ${heartbeat} 1s infinite;
  }
`;

const KissesTo = styled(Row)`
  
  span {
    padding: 0 2rem;
    height: 90px;
    vertical-align: middle;
    color: #D4AEA6;
    font-weight: bold;
  }

  svg, img {
    display: inline-block;
    margin: 0;
    max-width: 30%;
    max-height: 90px;
    justify-content: center;
    justify-items: center;

    &:first-of-type {
      height: 90px;
    }

    &:last-of-type {
      height: 80px;
    }
  }

`;
