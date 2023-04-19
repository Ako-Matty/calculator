import './App.css';

import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {

  const [number] = useState([7, 8, 9, 4, 5, 6, 1, 2, 3,]);
  const operations = ["C", "+", "-", "=", "%"];
  const bottom = ["0", "*", "/"]



  const [currentOperation, setCurrentOperation] = useState("");


  const Click = (val) => {
    setCurrentOperation(currentOperation + val);
    
console.log(val);


  }


  const calculateresult = () => {

    setCurrentOperation(evaluate(currentOperation).toString())
  };

  const ClearResult = () => {
    setCurrentOperation("")
  }


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
              if (val === "C") {
                return <div id="operation" onClick={() => { ClearResult(key)}}>{val}</div>
              }
              if (val === "=") { 
              return <div id="operation" onClick={() => { calculateresult(key)}}>{val}</div>
              }
              else {
                return <div id="operation" onClick={() => { Click(val)}}>{val}</div>
              }
            })}

          </div>

        </div>

      </div>

    </div>

  );
}


export default App;