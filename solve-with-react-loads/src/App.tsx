import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scenario1 } from './components/Scenarios/Scenario1';
import {Scenario2} from "./components/Scenarios/Scenario2";
import { Scenario2b } from './components/Scenarios/Scenario2b';
import { useLoads } from 'react-loads';

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

  const getThings = useCallback(() => doGetThings(1, "aa"), []); 
  const {response} = useLoads(getThings); 

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
        {selectedScenario === 0 && <Scenario1/>}
        {selectedScenario === 1 && <Scenario2/>}
        {selectedScenario === 2 && <Scenario2b/>}


      </div>



    </div>
  );
}

export default App;
