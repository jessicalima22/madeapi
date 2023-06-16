import axios from "axios";
import React from "react";

export default class carList extends React.Component {
 state={
    cars:[]
 }

 componentDidMount(){
    axios.get('https://1stapireact.jessicalima22.repl.co')
        .then(res=>{
            const dataCars = res.data
            this.setState({cars: dataCars})
        })
 }

 render(){
    return(
        <div>
            {this.state.cars.map(
                car=> <div key={car.id}>{car.brand} - {car.model} </div>
            )}
        </div>
    )
 }

}