import { styled, connect } from "frontity";
// Component that provides scroll to top functionality

//sk-dev: not x-browser - https://caniuse.com/css-scroll-behavior
//see: https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari

const BackToTop = ({ state }) => {
  
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  //const display = state.theme.config.footer.totop;

  return (
    <ToTop href="#site-header" onClick={scrollToTop}>
      <span>The bottom banana...</span>
      <span className="arrow p-1" aria-hidden="true">
      🍌
      </span>
      <span>
       ...click to slip ⬆
      </span>
    </ToTop>
  );
};

export default connect(BackToTop);

const ToTop = styled.a`
  font-weight: 800;
  letter-spacing:3px;
  font-size: .8rem;

  .arrow {
    font-size: 3rem;
  }
`;
