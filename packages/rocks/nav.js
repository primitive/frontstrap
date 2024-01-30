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
                    font="var(--pd-font-family-display)"
                    hover={state.theme.colors.yellow}
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
    color: #cfdfb8;
    border-color: rgba(0,0,0,.2);
    border-radius: .18rem;
    background-color: var(--bs-color-primary);
  }
`;

const StyledNavbar = styled(Navbar)`
  border-top-left-radius: .18rem;
  border-top-right-radius: .18rem;
  background-color: ${(props) => props.bg ? props.bg : 'rgba(12,17,43,0.3)'};
  position: relative;
  z-index: 3;

  a.navbar-brand {
    margin-top: -5px;
    max-width: 200px;
    max-height: 75px;
    color:transparent;
    border: none;
  }
  a.navbar-brand img {
    height: 75px;
  }
`;


const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-family: ${(props) => props.font ? props.font : "'Times New Roman', serif"};

  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;

  color: ${(props) => props.text ? props.text : 'ivory'} !important;
  line-height: 1.2rem;

  background-color: rgba(15, 74, 71, .33);
  border-radius: .18rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    border-bottom: 2px solid rgba(15, 74, 71, .66);
    background-color: rgba(15, 74, 71, .48);
  }

  &[aria-current="page"] {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    background-color: rgba(15, 74, 71, .66);
    border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
  }

`;

