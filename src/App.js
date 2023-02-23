import './App.css';

import React, { useState } from 'react';

// import {
//   atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
// } from 'mathjs';

import {
   evaluate
} from 'mathjs';



// import { click } from '@testing-library/user-event/dist/click';


// import { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'
// import { click } from '@testing-library/user-event/dist/click';




const App = () => {

  const [number, setNumbers] = useState([7, 8, 9, 4, 5, 6, 1, 2, 3,]);
  const operations = ["C", "+", "-", "=", "%"];
  const bottom = ["0", "*", "/"]

  const [currentOperation, setCurrentOperation] = useState("");


  const Click = (val) => {
    setCurrentOperation(currentOperation + val);
    
console.log(val);


  }






  const calculateresult = () => {
    const input = number.join("=");

    setNumbers(evaluate(input));
  };



  // const HandleAddNum = () => {

  //   let calculationsCopy = [...number];

  //   calculationsCopy.push(calculationsCopy[calculationsCopy.length - 1] + 1);

  //   setNumbers(calculationsCopy);

  // }

  // const HandleRemoveNum = (selectedIndex) => {
  //   let calculationsCopy = [...number];

  //   calculationsCopy.splice(selectedIndex, 1);
  //   setNumbers(calculationsCopy);


  // }





  return (
    <div className='App'>
      <div className='Bar'>
        <h1>Calculator</h1>
        <div className='calculator'>
          <div className="leftSide">
            <div id='display'>
             <div>{currentOperation}</div>
            </div>
            <div className="numbergrid">
              {number.map((val, key) => {
                return <div id='individualNumber' onClick={() => { Click(val)}}>{val}</div>;
              })}
              {bottom.map((val, key) => {
                return <div id="bottomoperation" onClick={() => { Click(val)}}>{val}</div>

              })}

            </div>
          </div>
          <div className="leftSide">
            {operations.map((val, key) => {
              return <div id="operation" onClick={() => { calculateresult(key)}}>{val}</div>
            })}

          </div>

        </div>

      </div>

    </div>

  );
}


export default App;