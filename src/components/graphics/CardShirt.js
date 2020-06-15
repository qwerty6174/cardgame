import React, {useContext} from 'react'
import MakeTurn from '../logiсs/makeTurn'
import Context from '../logiсs/context'
import '../styles.css'


function CardShirt({array}){
    const {removeCard} = useContext
    console.log(array)
    let src = []
    array.forEach(element => {
        let temp = "bmp/"+element.rang+"_"+element.suit+".bmp"
        src.push(temp)
    });

    return(
        <div>
            {src.map((item,idx)=>{
                return  <img src={item} alt='' key={idx} onClick={()=>MakeTurn(array, idx)}></img>
            })}
        </div>
    )
}
export default CardShirt