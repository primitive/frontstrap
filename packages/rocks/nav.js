import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { Container, Row, Nav, Navbar} from "react-bootstrap";

/**
 * Navigation Component
 *
 * Renders the navigation links
 */
const MainNav = ({ state }) => (

  <NavWrap>
    <Container>

        <StyledNavbar
          collapseOnSelect
          bg=""
          expand="lg"
          aria-label="Main"
          text={state.theme.colors.primary}
          hover={state.theme.colors.success}
        >

<Container>

          <Navbar.Brand href="/">
            <Image
              src={state.theme.config.header.logo}
              className="d-inline-block align-top"
              alt={state.theme.config.header.alt}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-nav" />

          <Navbar.Collapse id="site-nav">
            <Nav className="mx-auto">

              {state.theme.menu.map(([name, link]) => (
                <Nav.Link as={StyledLink}
                    key={name}
                    aria-current={link === state.router.link ? "page" : undefined}
                    link={link}
                    href={link}
                    text=""
                    hover={state.theme.colors.pink}
                    font="Hepta Slab"
                    className="p-3 mr-2 ml-2 ml-lg-2"
                  >
                  {name}
                </Nav.Link>
              ))}
    
            </Nav>
          </Navbar.Collapse>

          </Container>
        </StyledNavbar>

    </Container>
  </NavWrap>
);

export default connect(MainNav);

const NavWrap = styled.div`
  .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.2);
    background-color: #87af4e;

    border-radius: 0;
  }
`;

const StyledNavbar = styled(Navbar)`
  border-top-left-radius: 0rem;
  border-top-right-radius: 0rem;
  background-color: ${(props) => props.bg ? props.bg : 'rgba(12,17,43,0.9)'};
  position: relative;
  z-index: 3;

  a.navbar-brand {
    max-width: 200px;
    max-height: 65px;
    color:transparent;
    border: none;
  }
  a.navbar-brand img {
    height: 65px;
  }
`;


const StyledLink = styled(Link)`
  font-size: 1rem;
  font-family: ${(props) => props.font ? props.font : 'Hepta Slab'};
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;

  color: ${(props) => props.text ? props.text : 'ivory'} !important;
  line-height: 1.8rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
  }

  &[aria-current="page"] {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
  }

`;

