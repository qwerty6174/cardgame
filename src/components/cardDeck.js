import React from 'react'

function createDeck(){
    let deck =[]
    for(let i=6;i<15;i++){
        for(let k = 1;k<5;k++){
            let card = {}
            card.rang = i
            card.suit = k
            deck.push(card)
        }
    }
    return deck
}

export default createDeck