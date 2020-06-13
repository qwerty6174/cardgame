import React from 'react'
import CreateHand from './createHand'

let playerHands=[]

function createHands(props, deck){
    for(let i=0;i<=props-1;i++){
        let temp = CreateHand(deck)
        playerHands.push(temp)
        console.log(playerHands)
    }
    return playerHands
}

export default createHands

