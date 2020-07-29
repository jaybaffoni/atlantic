import React from 'react';
import logo from './compass.png';
import textlogo from './textonly.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <img src={textlogo} className="text-logo" alt="logo" />
        <p>Currently Under Maintenance</p>
      </header>
    </div>
  );
}

export default App;
