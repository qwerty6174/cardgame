import React from 'react'
import createHands from '../logiсs/createHands'
import CardShirt from './CardShirt'
import YourTurn from '../logiсs/YourTurn'
import '../styles.css'

const hands = createHands()

function Status(){
    if(hands){
    return(
            <div>
                {hands.map((item,idx)=>{
                    let className="playerHands"+idx
                    return (
                            <div className={className}>
                                <CardShirt array = {item} key={idx}/>
                                <button onClick={YourTurn}>Конец хода</button>
                            </div>
                            )
                })}
            </div>
         )
    }
}

export default Status