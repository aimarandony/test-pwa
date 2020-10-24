import React from 'react';
import logo from './logo.svg';
import './App.css';
import pepe from './images/el-pepe.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <p>
          PWA!!! EL PEPE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
