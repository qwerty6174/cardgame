import React from 'react';
import './App.css';
import createHands from './components/logiсs/createHands' 
import Status from './components/graphics/Status'

function App() {
  createHands(2)
  return (
    <div className="App">
      <Status/>
    </div>
  );
}

export default App;
