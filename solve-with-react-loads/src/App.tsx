import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scenario1 } from './components/Scenarios/Scenario1';


const scenarios = [
  "Scenario 1",
  "Scenario 2",
  "Scenario 3a",
  "Scenario 3b",
  "Scenario 4"
];

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
        {selectedScenario === 0 && <Scenario1/>}
      </div>



    </div>
  );
}

export default App;
