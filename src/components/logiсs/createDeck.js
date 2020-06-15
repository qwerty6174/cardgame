import React from 'react'

let deck =[]
let id = 0

export default function CreateDeck(){
    for(let i=6;i<15;i++){
        for(let k = 0;k<4;k++){
            let card = {}
            card.rang = i
            card.suit = k
            card.id = id
            deck.push(card)
            id++
        }
    }
    return deck
}
