import React from 'react';
import './App.css';
import playGround from './components/playGround' 
import Status from './components/Status'

function App() {
  playGround(2)
  return (
    <div className="App">
      <Status/>
    </div>
  );
}

export default App;
