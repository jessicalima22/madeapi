import axios from "axios";
import React, {useState, useEffect} from "react";


export default function carList(){
 const [cars, setCars]=useState([])

 useEffect(()=>{
    axios.get('https://1stapireact.jessicalima22.repl.co')
        .then(res=>{
            const dataCars = res.data
            setCars(dataCars)
        })
 })

    return(
        <div>
            {cars.map(
                car=> <div key={car.id}>{car.brand} - {car.model} </div>
            )}
        </div>
    )
 

}