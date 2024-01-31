import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Image from "@frontity/components/image";
import Frame from "@primitive/pebbles/frame";
import CTA from "@primitive/rocks/button-fancy";

import { jump, animatedgradient, stripedbg } from "@primitive/scenes/glamourmagic";

const Bronze = ({ state }) => {

  const display = state.theme.config.homepage.bronzeConfig;

  return (
    <PromoSection>
      <PromoOne className="pt-4">
        <Container>

          <Row>

            <Col xs={12} md={6} className="text-center">
              <StyledFrame
                className={display.imageFrame1}
                link={display.link1}
              >

                <Image
                  alt={display.title1}
                  src={display.imagesrc1}
                  className={"img-fluid"}
                //srcSet={srcset}
                />
              </StyledFrame>
            </Col>

            <Col>
              <StyledFrame
                className={display.listFrame1}
                link={display.link1}>
                <TitleOne>{display.title1}</TitleOne>
                <ul>
                  {
                    display.list1.map((item, i) => (
                      <li key={i}><i className="fa fa-check-square-o" aria-hidden="true"></i>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>
            </Col>

          </Row>

          <Row>
            <Col className="align-content-center pt-4 pt-4">
              <p className="h3 news text-center pt-3 pb-3">{display.close1}</p>
              <CTA
                text="Discover More"
                link="/web-design/"
                colors={[state.theme.colors.coal, state.theme.colors.white, state.theme.colors.brightlime]}
              />
            </Col>
          </Row>

        </Container>
      </PromoOne>

      <PromoTwo className="pt-4">
        <Container>

          <Row>

            <Col xs={12} md={6} className="text-center">
              <StyledFrame
                className={display.imageFrame2}
                link={display.link2}
              >

                <Image
                  alt={display.title2}
                  src={display.imagesrc2}
                  className={"img-fluid"}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col>

              <StyledFrame className={display.listFrame2} link={display.link2}>
                <TitleTwo>{display.title2}</TitleTwo>
                <ul>
                  {
                    display.list2.map((item, i) => (
                      <li key={i}><i className="fa fa-check-square-o" aria-hidden="true"></i>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>

            </Col>

          </Row>

          <Row>
            <Col className="align-content-center pt-4 pb-4">
              <p className="h3 news text-center pt-3 pb-3">{display.close2}</p>
              <CTA
                text="Find out More"
                link={display.link2}
                colors={[state.theme.colors.coal, state.theme.colors.white, state.theme.colors.brightlime]}
              />
            </Col>
          </Row>

        </Container>
      </PromoTwo>
    </PromoSection>
  )
};

export default connect(Bronze);

// refine
// https://stackoverflow.com/questions/48713421/target-child-element-styled-components

const PromoSection = styled.section`

  margin-top: 3rem;
  margin-bottom: 1.5rem;
  background-color: var(--bs-color-primary);
  border: none;

  .fancy-frame {
    margin: 2rem auto;
    padding: 12px;
    display: inline-block;
    position: relative;
    transition: 1s ease-in-out;
  }

  .frame {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    text-align: center;

    ul {
      margin: 0;
      padding: .66rem .33rem;
      background: ivory;

      li {
        margin: 0;
        padding: .1rem .3rem;
        font-family: var(--pd-font-family-serif);
        font-size: 1.5rem;
        line-height: 1.5;
        list-style: none;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(171,207,117, 0.6);
  
        &:hover {
          animation: ${jump} .6s 1;
        }

        i {
          margin-right: .3rem;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    .fancy-frame { 
      margin-top: 4rem; 
    }
    .frame { 
      margin-top: 1rem; 
      text-align: left;
    }
  }

`;

const TitleOne = styled.h5`
  font-size: 4.5rem;
  font-family: var(--pd-font-family-display);
  color: ivory;
`;

const TitleTwo = styled.h5`
  font-size: 4.5rem;
  font-family: var(--pd-font-family-display);
  color: ivory;
  letter-spacing: -1px;
`;

const StyledFrame = styled(Frame)`
  a { &:hover { text-decoration: none; } }
`;

const PromoOne = styled.div`
  padding-bottom: 6rem;
  background-color: #7a9e47;
  background: linear-gradient(to bottom,  #7a9e47 52%,#5e822c 100%); 
  border: none;

  p {
    color: darkslategray;
  }

  .fancy-frame { 
    background: linear-gradient(
      -45deg, 
      #9bc85a 25%, 
      rgb(0, 165, 70) 25%, 
      rgb(0, 165, 70) 50%, 
      #9bc85a 50%, 
      #9bc85a 75%, 
      rgb(0, 165, 70) 75%, 
      rgb(0, 165, 70));
    background-size: 20px 20px;
    background-position: 0 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .frame {
  
    h5 { 
      margin-bottom: 0;
      padding: 5px;
      display: inline-block;
      position: relative;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

      &::after {
        content: " ";
        height: .6rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        
        background: linear-gradient(
          -45deg, 
          #9bc85a 25%, 
          rgb(0, 165, 70) 25%, 
          rgb(0, 165, 70) 50%, 
          #9bc85a 50%, 
          #9bc85a 75%, 
          rgb(0, 165, 70) 75%, 
          rgb(0, 165, 70)
          );
        background-size: 20px 20px;
        background-position: 0 0;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }


  }

  &:hover {
    .fancy-frame {
      transition: 2s ease-out;
      animation: ${stripedbg} 1s linear infinite;
    }
    .frame h5::after {
      transition: 2s ease-out;
      animation: ${stripedbg} 1s linear infinite reverse;
    }
  }

`;

const PromoTwo = styled.div`
  padding-bottom: 9rem;
  background-color: #7a9e47;
  background: linear-gradient(to top,  #7a9e47 42%,#5e822c 100%); 
  border: none;

  p {
    color: darkslategray;
  }

  .fancy-frame { 
    background: linear-gradient(45deg, #aafa3c, #4b6f1a);
    background-size: 300% 300%;
    background-position: 0 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .frame {
  
    h5 { 
      margin-bottom: 0;
      padding: 5px;
      display: inline-block;
      position: relative;
      color: ivory;
      text-shadow: 1px 1px 0 rgba(24,30,14, 0.3);

      &::after {
        content: " ";
        height: .6rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        
        background: linear-gradient(45deg, #aafa3c, #4b6f1a);

        background-position: 0 0;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }

  }


  &:hover {
    .fancy-frame {
      transition: 10s ease-in-out;
      animation: ${animatedgradient} 4s ease alternate infinite;
      background-size: 300% 300%;
    }
    .frame h5::after {
      transition: 2s ease-out;
      animation: ${animatedgradient} 4s ease alternate infinite;
      background-size: 300% 300%;
    }

  }

`;