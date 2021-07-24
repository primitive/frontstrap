import React from "react";
import { styled, connect } from "frontity";
import { Container, Row, Col } from "pebbles/grid";
import Link from "@frontity/components/link";


const description404 = (
  <>
    <p>Oh. We can't find a page where you a looking.</p>
    <span role="img" aria-label="confused face">
      😕
    </span>
    <p>It may have been removed, renamed, or did not exist in the first place.</p>
    <p>
    Do panic! If this persists, sit down, try drinking tea or <Link link={'/contact'}>let us know</Link>.
  </p>
  </>
);

const description = (
  <p>
    Do panic! If this persists, sit down, try drinking tea or <Link link={'/contact'}>let us know</Link>.
  </p>
);



// The Error page component
const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link);

  if (state.theme.debug) {
    console.log("@page-error: data", data);
  }

  const title = "Oops, something bad happened";
  const title404 = "Oops! 404";


  return (
    <Container className="post error">
      <Row>
        <Col className="p-5 mb-5 text-center">
          <Title className="pb-5">{data.is404 ? title404 : title}</Title>
          <Description>
            {data.is404 ? description404 : description}
          </Description>
          <DevInfo className="mt-5 alert alert-warning">
            {data.errorStatus ? data.errorStatus+": "+data.errorStatusText : undefined}
          </DevInfo>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(ErrorPage);


const Title = styled.h1`
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6rem;
  color: rgba(12, 17, 43, 0.8);
`;
const DevInfo = styled.p`
  line-height: 1.6rem;
  color: rgba(12, 17, 43, 0.8);
`;