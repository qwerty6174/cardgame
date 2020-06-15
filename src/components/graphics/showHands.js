import React from 'react'
import CardShirt from './CardShirt'
import YourTurn from '../logiсs/YourTurn'
import '../styles.css'



function Status({hands}){
    if(hands){
    return(
            <div>
                {hands.map((item,idx)=>{
                    console.log(item)
                    let className="playerHands"+idx
                    return (
                            <div className={className}>
                                <CardShirt array = {item} key={idx}/>
                                <button onClick={()=>YourTurn}>Конец хода</button>
                            </div>
                            )
                })}
            </div>
         )
    }
}

export default Status