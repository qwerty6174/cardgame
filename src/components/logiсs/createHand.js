import React from 'react'

var handnumber = []
export default function createHand(deck){
    let hand=[]

    if(hand.length<4){
        while(handnumber.length<4){
            let index = Math.floor(Math.random() * Math.floor(36));
            if (handnumber.indexOf(index)===-1){
            handnumber[handnumber.length]=index}
        }

    for(let i=0;i<=3;i++){
        hand.push(deck[handnumber[i]])
        deck.splice(handnumber[i],1)
    }
}
    return  hand
}
