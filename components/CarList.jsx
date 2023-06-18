import React, {useState, useEffect} from "react";


export default function carList(){
 const [cars, setCars]=useState([])

 useEffect(()=>{

    fetch('https://1stapireact.jessicalima22.repl.co',{
        mode: "no-cors",
    })
    .then((res)=>res.json())
    .then(
        (result)=>{
            setCars(result)
        }
    )

 })

    return(
        <div>
            {cars.map(
                car=> <div key={car.id}>{car.brand} - {car.model} </div>
            )}
        </div>
    )
 

}