
// ignore: debug + testz

/* 
    animation: ${ discolight } 5s ease-out infinite;
    animation: ${ discolight } 5s ease-out infinite;
    
    animation: ${(props) => discolightDyn(props.rainbow)} 5s ease-out infinite;

    animation: ${ (props) => discolightDyn(props.rainbow) } 5s ease-out infinite;

    let color1 = iCanSingA(rainbow)[0];
    let color2 = iCanSingA(rainbow)[1];
    let color3 = iCanSingA(rainbow)[2];
    
    let aOne = hexToRGBA(iCanSingA(rainbow)[0], '.1');
    let aTwo = hexToRGBA(iCanSingA(rainbow)[1], '.6');
    let aOneTwoThree = hexToRGBA(iCanSingA(rainbow)[2], '.5');
    
    // console.log(test1, test2, test3, color1, color2, color3);
    console.log( aOne, aTwo, aOneTwoThree );


    // css={{ animation: `2s ${animation} ease-in-out infinite` }}

    let color1 = iCanSingA(rainbow)[0];
let color2 = iCanSingA(rainbow)[1];
let color3 = iCanSingA(rainbow)[2];

let aOne = hexToRGBA(iCanSingA(rainbow)[0], '.1');
let aTwo = hexToRGBA(iCanSingA(rainbow)[1], '.6');
let aOneTwoThree = hexToRGBA(iCanSingA(rainbow)[2], '.5');

// console.log(test1, test2, test3, color1, color2, color3);
console.log('rgba', aOne, aTwo, aOneTwoThree );

// 
// const discolight = (test) => keyframes`

*/



const discolight = keyframes`
{
  0% {
      background: rgba(6,182,241,.1);
      box-shadow:
      inset 0 0 130px #348413,
      inset 0 0 70px #348413; 
    }

  25%  {
    background: rgba(6,182,241,.6);
    box-shadow:
    inset 0 0 140px #348413,
    inset 0 0 100px #348413; 
   }
  50%  {
    box-shadow:
    inset 0 0 140px #348413,
    inset 0 0 90px #348413;
  }
  50%  {
    box-shadow:
    inset 0 0 130px #348413,
    inset 0 0 70px #348413;
  }
  100% {
    background: rgba(52,132,19,.5);

    box-shadow:
    inset 0 0 130px #f5e527,
    inset 0 0 90px #f5e527; 
  }
}
`;