import { styled } from "frontity";
import { discolight } from "scenes/glamourmagic";
import { themecolor } from "../components/dust/_colors";


const PimpMyList = styled.ul`

  margin: 1rem auto;
  padding: 1rem;

  display: flex;
  flex: 0 0 90%;
  flex-wrap: wrap;
  list-style-type: none;

  background: ${(props) => props.bg ? props.bg : 'ivory'};
  box-shadow: 0 0 3px rgba(0,0,0,0.6),
              0 19px 38px rgba(0,0,0,0.30),
              0 15px 12px rgba(0,0,0,0.22),
              inset 0 0 6px rgba(0,0,0,0.3);

  cursor: pointer;

  li {
    
    margin: 0;
    padding: .2rem .3rem .6rem;

    display: flex;
    flex: 100%;
    min-height: 130px;

    font-size: 1.3rem;
    font-family: 'Abril Fatface', Georgia, cursive; 
    font-weight: 700;
    color: ${(props) => props.color ? props.color : 'black'};

    text-align: center;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 0 rgba(255,255,255,0.3), 4px 3px 2px rgba(0,0,0,0.3);

    background-color: #232b2b;
    border: solid 2px ${(props) => props.color ? props.color : 'black'};
  }
  li:nth-of-type(odd) {
    will-change: background, box-shadow;
    animation: ${discolight} 5s ease-out infinite;
    animation-direction: alternate;
  }
  li:nth-of-type(even) {
    will-change: background, box-shadow;
    animation: ${discolight} 5s ease-out infinite;
    animation-direction: alternate;
  }
  li:nth-of-type(2) { animation-delay: .2s; }
  li:nth-of-type(3) { animation-delay: .4s; }
  li:nth-of-type(4) { animation-delay: .6s; }
  li:nth-of-type(5) { animation-delay: .8s; }
  li:nth-of-type(6) { animation-delay: 1s; }
  li:nth-of-type(7) { animation-delay: 1.2s; }
  li:nth-of-type(8) { animation-delay: 1.4s; }
  li:nth-of-type(9) { animation-delay: 1.6s; }

  li:hover {
    background-color: ivory !important;
  }

  @media screen and (min-width: 576px) {
    li {
      flex: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    .thinglist {
      width: 80%;
    }

    li {
      flex: 33%;
    }
  }

  


`;

const DiscoList = ({ list, children, classes }) => {
  console.log('DiscoList');
  //console.log({ list, author })

  return (
    <PimpMyList
      bg={`${themecolor.coal} url(https://api.primitivedigital.uk/wp-content/uploads/stone/grayrock-300x300.png)`}
      color={themecolor.coal}
      //className={classes}
    >
      {children}
    </PimpMyList>
  )
};

const list = {
  name: 'list-discolist',
  priority: 10,
  test: ({ component, props }) => component === "ul" && (props.className && props.className.includes("thinglist")),
  processor: ({ node, props }) => {

    const children = node.children;
    const classes = props.className;

    return {
      component: DiscoList,
      props: { children, classes},
    }
  },
}

export default list;