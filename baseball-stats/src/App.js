import React from 'react';
import './App.css';
import { Dashboard } from "./components/Dashboard";
import { Display } from "./components/Display";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Baseball Info
        
          <Route exact path="/" component={Dashboard} />
          <Route path="/display" component={Display} />

        </header>




      </div>
    </Router>
  );


}
export default App;
