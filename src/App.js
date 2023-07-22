import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import ReactDOM from "react-dom"

// C O M P O N E N T 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="70px"/>
        <h1>Fun facts about React ❤</h1>
          <ul>
            <li>Was first released 2013.</li>
            <li>Originally created by Jordan Walke </li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul> 
        
      </header>
    </div>
  );
}

// E N D   O F   C O M P O N E N T 
export default App;
