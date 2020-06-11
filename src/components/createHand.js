import React from 'react'
import createDeck from './cardDeck'


function createHand(){
    let deck = createDeck()
    let hand = []
    for(let i=0;i<=6;i++){
        let index = Math.floor(Math.random() * Math.floor(36));
        hand.push(deck[index])
        deck.splice(index,1)
    }
    return hand
}

export default createHand