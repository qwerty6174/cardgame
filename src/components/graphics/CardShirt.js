import React from 'react'
import MakeTurn from '../logiсs/makeTurn'
import '../styles.css'


function CardShirt({array}){
    let src = []
    array.forEach(element => {
        let temp = "bmp/"+element.rang+"_"+element.suit+".bmp"
        src.push(temp)
    });

    return(
        <div>
            {src.map((item,idx)=>{
                console.log('ok!')
                return  <img src={item} alt='' key={idx} onClick={function(){MakeTurn(array, idx)}}></img>
            })}
        </div>
    )
}
export default CardShirt