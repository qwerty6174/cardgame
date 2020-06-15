import React from 'react'
import YourTurn from './YourTurn'
import '../styles.css'

let cardGround = []

function makeTurn(array, key){
    if(YourTurn){
        cardGround = array[key]
        array.splice(key,1)
        console.log(array)
    }
    console.log('made')
    return
}

export default makeTurn