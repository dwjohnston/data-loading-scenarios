import React, { useState, useCallback } from 'react';
import logo from './logo.svg';

const scenarios = [
  "Scenario 1",
  "Scenario 2",
  "Scenario 2b",
  // "Scenario 3a",
  // "Scenario 3b",
  // "Scenario 4"
];


async function doGetThings(i: number, foo: string) : Promise<string> {
  return new Promise(res => {
    res("foo"); 
  }); 
}

function App() {

  const [selectedScenario, updateSelectedScenario] = useState(0);
  return (
    <div className="App">

      <div className="navbar">
        {scenarios.map((v, i) => {
          return <div className="nav-button" key={i} onClick={() => updateSelectedScenario(i)}>
            {v}
          </div>

        })}
      </div>


      <div>


      </div>



    </div>
  );
}

export default App;
