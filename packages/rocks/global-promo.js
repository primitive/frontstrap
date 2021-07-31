import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { Container, Row, Col } from "pebbles/grid";

const Promo = ({ state }) => {

  const display = state.theme.config.global.promo;
  if (!display) { return null }

  const colors = state.theme.colors;

  /*
  __global-promo: props
      bg={colors.brown} 
      text={colors.ivory} 
  */

  return (
    <PromoSection
      bg=""
    >
      <Container>
        <Row>
          <Col className="text-center p-5">
            <StyledLink link={display.link}>
              <PreText
                text={colors.ivory}
              >
                {display.pretext}
              </PreText>
              <Text
                text={colors.ivory}
              >
                {display.text}
              </Text>
            </StyledLink>
          </Col>
        </Row>
      </Container>
    </PromoSection>
  )
};

export default connect(Promo);


const PromoSection = styled.section`
  background-color: ${(props) => props.bg ? props.bg : 'bisque'};
  border-top: 6px solid #e8e6cf;
`;

const PreText = styled.h2`
  color: ${(props) => props.text ? props.text : 'darkslategrey'};
`;

const Text = styled.h3`
  color: ${(props) => props.text ? props.text : 'darkslategrey'};
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;