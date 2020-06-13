import React from 'react'
import YourTurn from './YourTurn'
import CardShirt from '../graphics/CardShirt'
import '../styles.css'

let cardGround = []

function makeTurn(array, key){
    if(YourTurn){
        cardGround = array[key]
        array.splice(key,1)
    }
    console.log(array)
    return (<div>
         {array.map((item,idx)=>{
                    let className="playerHands"+idx
                    return (
                            <div className={className} key={Math.random()}>
                                <CardShirt array = {item} key={idx}/>
                                <button onClick={YourTurn}>Конец хода</button>
                            </div>
                            )
                })}
    </div>)
}

export default makeTurn