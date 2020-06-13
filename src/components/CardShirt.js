import React from 'react'



function CardShirt({array}){
    let src = []
    array.forEach(element => {
        let temp = "bmp/"+element.rang+"_"+element.suit+".bmp"
        console.log(temp)
        src.push(temp)
    });

    return(
        <div>
            {src.map(item=>{
                return  <img src={item} alt=''></img>
            })}
        </div>
    )
}
export default CardShirt