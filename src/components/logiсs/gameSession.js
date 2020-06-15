import React from 'react'
import createHand from './createHand'
import ShowHands from '../graphics/showHands'



function GameSession({deck}){
    let hand=[]
    for (let i=0;i<2;i++){
    hand.push(createHand(deck))}
    return(<ShowHands hands={hand}/>)
}



export default GameSession