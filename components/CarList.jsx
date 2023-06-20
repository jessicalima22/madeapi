import React, {useState, useEffect} from "react";


export default function CarList(){
 const [cars, setCars]=useState([])

     useEffect(()=>{
        fetch ('https://cors-anywhere.herokuapp.com/https://1stapireact.jessicalima22.repl.co')
            .then(res=>res.json())
            .then(
                (result)=>{
                    setCars(result)
                }
            )
    })
        
     
    return(
        <div>

            <h1>Calling API via REPL</h1>
            <p>
            {cars.map(
                car=> <div key={car.id}>{car.brand} - {car.model} </div>
            )} 
            </p>
        </div>
    )
 

}