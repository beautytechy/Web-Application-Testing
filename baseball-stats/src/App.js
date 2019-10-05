import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";


function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = (currentStrike) => {

    if (currentStrike > 2) {
      return 0;
    }
    else {
      return currentStrike + 1;
    }
  }
  
  const addBall = (currentBall) => {
    if (currentBall >= 3) {
      return 0;
    }
    else {
      return currentBall + 1;
    }
  };
  
  const foul = (currentStrike) => {
  
    if (currentStrike < 2   )
      return currentStrike + 1;
    else {
      return (
        currentStrike = 0
      )
    }
  }
  
  const hit = (current) => {
    return current
  }
  const Display = () => {
  
    return (
      
      <div>
        <h1>Display</h1>
        <p>Balls: {balls}</p>
        <p>Strikes: {strikes}</p>
      </div>
    )
  }



  const Dashboard = () => {


    return (
      <>
        <div>
          <button onClick={() => setStrikes(addStrike(strikes))}>Strike</button>
          <button onClick={() => setBalls(addBall(balls))}>Ball</button>
          <button onClick={() => setStrikes(foul(strikes))}>Foul</button>
          <button onClick={() => setStrikes(hit(strikes))}>Hit</button>
        </div>
     
      </>
    )
  }
  return (
  
      <div className="App">
        <header className="App-header">
          Baseball Info
          <Dashboard />
          <Display />
        </header>




      </div>
  
  );


}
export default App;
