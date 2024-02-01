import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { Container, Row, Col } from "@primitive/pebbles/grid";

const Promo = ({ state }) => {

  const display = state.theme.config.promo;
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
                text=""
              >
                {display.pretext}
              </PreText>
              <Text
                text=""
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
  margin-top: 3rem; 
  background-color: ${(props) => props.bg ? props.bg : 'var(--bs-success-bg-subtle)'};
  border-top: 6px solid var(--bs-success-border-subtle);
  border-bottom: 6px solid var(--bs-success-border-subtle);
`;

const PreText = styled.h2`
  color: ${(props) => props.text ? props.text : 'var(--bs-success)'};
  font-family: var(--pd-font-family-display);
`;

const Text = styled.h3`
  color: ${(props) => props.text ? props.text : 'darkslategrey'};
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;