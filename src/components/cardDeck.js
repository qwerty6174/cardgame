import React from 'react'

let deck =[]
let id = 0

export default function CreateDeck(){
    for(let i=6;i<15;i++){
        for(let k = 0;k<4;k++){
            let image
            image = new Image();
            image.src = "/bmp/"+i+"_"+k+".bmp"
            let card = {}
            card.rang = i
            card.suit = k
            card.id = id
            card.shirt = image
            deck.push(card)
            id++
        }
    }
    console.log(deck)
    return deck
}
