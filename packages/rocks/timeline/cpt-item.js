import React from "react";
import { connect, styled, decode } from "frontity";

import Link from "@frontity/components/link";
import Image from "@frontity/components/image";

import { Row, Col } from "primitivepebbles/grid";

import Card from 'react-bootstrap/Card';

const TemporalEvent = ({ state, item, layer, headbg, headcolor }) => {

  if (state.theme.debug) {
    //console.log("@cpt-item: item", item);
  }

  const withSource = <a href={item.acf.source}><Card.Img src={item.acf.image} className="card-img" /></a>,
  noSource = <Card.Img src={item.acf.image} className="card-img" />,
  checkSource = item.acf.source ? withSource : noSource;

  return (
    <StyledPost bg={headbg} as="article" layer={layer} >

      <Header bg={headbg} >
        <Date color={headcolor} bg={state.theme.colors.primary} className="pl-4 pr-4">
          <b className="p-4">{item.acf.year}</b>
        </Date>

        <Title
          color={headcolor}
          bg={state.theme.colors.primary}
          className="text-center"
          dangerouslySetInnerHTML={{ __html: item.title.rendered }}
        />
      </Header>

      <Row>

        <Col>
          {item.acf.image && (
            checkSource
          )}
        </Col>

        <Col>
          <Card.Body>

            {item.acf.significance && (
              <h3 dangerouslySetInnerHTML={{ __html: item.acf.significance }} />
            )}

            {item.acf.info && (
              <p dangerouslySetInnerHTML={{ __html: item.acf.info }} />
            )}

            {item.acf.who && (
              <h5>
                Blamed on: <a href={item.acf.who_link} dangerouslySetInnerHTML={{ __html: item.acf.who }} />
              </h5>
            )}

            {item.acf.tit_bits && (
              <div className="mt-3">
                <h6>Fun facts: </h6>
                <p dangerouslySetInnerHTML={{ __html: item.acf.tit_bits }} />
              </div>
            )}

            {item.acf.further_info && (
              <Link link={item.acf.further_info}>
                ☞ Please, do tell me more!
              </Link>
            )}

          </Card.Body>
        </Col>
      </Row>

    </StyledPost>
  );
};

export default connect(TemporalEvent);

/*
// sk-dev: test alternate styling
// https://emotion.sh/docs/styled
const StyledPost = styled.article({
  margin: '1rem',
  minWidth: '180px'
  },
  props => ({ zIndex: props.layer })
);
*/


const StyledPost = styled(Card)`

  color: ${props => props.bg};
  border: 2px solid rgba(255,255,255, 0.1);
  border-radius: .6rem;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.1), 
             -15px -15px 30px rgba(0, 0, 0, 0.1);

  z-index: ${props => props.layer};
  overflow: hidden;
  
  .card-img {
    height: 100%;
    width: 100%;
    max-height: 500px;
    min-height: 100px;
    object-fit: cover;
    border-radius: 0;
  }

`;

const Header = styled(Card.Header)`
  background-color: ${props => props.bg};
`;

const Date = styled.div`
  margin: -.8rem auto 1.5rem;

  color: ${props => props.color};
  font-size: 2.2rem;
  font-family: 'Slabo 27px';

  background: ${props => props.bg};
  border-radius: 0 0 .3rem .3rem;
  box-shadow: 0px 0px 3px rgba(0,0,0,.3);

  b {
    padding: 1.5rem;
    text-shadow: 1px 1px 0 rgba(0,0,0,.3);
    background: ${props => props.bg};
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(0,0,0,.3);
  }
`;

const Title = styled.h2`
  color: ${props => props.color};
  font-size: 2.8rem;
`;
