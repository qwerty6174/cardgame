import React from 'react'
import PlayGround from './playGround'
import CardShirt from './CardShirt'

const hands = PlayGround()

function Status(){
    if(hands){
    return(
            <div>
                <p>В первой руке {hands[0].length} карт</p>
                {hands.map(item=>{
                    return (
                            <div className='playerHands'>
                                <CardShirt array = {item} key={Math.random()}/>
                            </div>
                            )
                })}
            </div>
         )
    }
}
    export default Status

   // <img className ='img' alt='myimg' src={ require('../bmp/6_0.bmp')}></img>