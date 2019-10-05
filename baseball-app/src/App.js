import React from 'react';
import './App.css';
import { useState } from "react";

export const addStrike = (currentStrike) => {

  if (currentStrike >= 2) {
    return 0;
  }
  else {
    return currentStrike + 1;
  }
}

export const addBall = (currentBall) => {
  if (currentBall >= 3) {
    return 0;
  }
  else {
    return currentBall + 1;
  }
};

export const foul = (currentStrike) => {

  if (currentStrike === 2)
    return currentStrike;
  else {
    return (
      currentStrike + 1
    )
  }
}

export const hit = (param) => {
  return param = 0

}

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);


  return (

    <div className="App">
      <header className="App-header">

        <>
          <div>
            <button onClick={() => setStrikes(addStrike(strikes))}>Strike</button>
            <button onClick={() => setBalls(addBall(balls))}>Ball</button>
            <button onClick={() => setStrikes(foul(strikes))}>Foul</button>
            <button onClick={() => setStrikes(hit(strikes), setBalls(hit(balls)))}>Hit</button>
          </div>
          <div>
            <h1>Balls: {balls}</h1>
            <h1>Strikes: {strikes}</h1>
          </div>
        </>
      </header>




    </div>

  );


}
export default App;