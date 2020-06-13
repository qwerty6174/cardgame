import React from 'react'
import CreateDeck from './createDeck'

var handnumber = []
let deck = CreateDeck()

export default function createHand(){
    let hand = []
        while(handnumber.length<4){
            let index = Math.floor(Math.random() * Math.floor(36));
            if (handnumber.indexOf(index)===-1){
            handnumber[handnumber.length]=index}
        }
    for(let i=0;i<4;i++){
        hand.push(deck[handnumber[i]])
        deck.splice(handnumber[i],1)
    }
    return  hand
}
