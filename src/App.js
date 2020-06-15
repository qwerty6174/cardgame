import React from 'react';
import './App.css';
import GameSession from './components/logiсs/gameSession';

function App() {
  const [deck, setDeck] = React.useState([
    {rang: 6, suit: 0, id: 0},
    {rang: 6, suit: 1, id: 1},
    {rang: 6, suit: 2, id: 2},
    {rang: 6, suit: 3, id: 3},
    {rang: 7, suit: 0, id: 4},
    {rang: 7, suit: 1, id: 5},
    {rang: 7, suit: 2, id: 6},
    {rang: 7, suit: 3, id: 7},
    {rang: 8, suit: 0, id: 8},
    {rang: 8, suit: 1, id: 9},
    {rang: 8, suit: 2, id: 10},
    {rang: 8, suit: 3, id: 11},
    {rang: 9, suit: 0, id: 12},
    {rang: 9, suit: 1, id: 13},
    {rang: 9, suit: 2, id: 14},
    {rang: 9, suit: 3, id: 15},
    {rang: 10, suit: 0, id: 16},
    {rang: 10, suit: 1, id: 17},
    {rang: 10, suit: 2, id: 18},
    {rang: 10, suit: 3, id: 19},
    {rang: 11, suit: 0, id: 20},
    {rang: 11, suit: 1, id: 21},
    {rang: 11, suit: 2, id: 22},
    {rang: 11, suit: 3, id: 23},
    {rang: 12, suit: 0, id: 24},
    {rang: 12, suit: 1, id: 25},
    {rang: 12, suit: 2, id: 26},
    {rang: 12, suit: 3, id: 27},
    {rang: 13, suit: 0, id: 28},
    {rang: 13, suit: 1, id: 29},
    {rang: 13, suit: 2, id: 30},
    {rang: 13, suit: 3, id: 31},
    {rang: 14, suit: 0, id: 31},
    {rang: 14, suit: 1, id: 33},
    {rang: 14, suit: 2, id: 34},
    {rang: 14, suit: 3, id: 35}
])


function onCreate(id){
  setDeck(deck.filter(card => card.id !== id))
}

return (
    <div className="App">
      <GameSession deck={deck}/>
    </div>
  );
}

export default App;
