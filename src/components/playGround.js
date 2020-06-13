import React from 'react'
import CreateHand from './createHand'

let playerHands=[]

function PlayGround(props){
    for(let i=0;i<=props-1;i++){
        let temp = CreateHand()
        playerHands.push(temp)
    }
    return playerHands
}

export default PlayGround

