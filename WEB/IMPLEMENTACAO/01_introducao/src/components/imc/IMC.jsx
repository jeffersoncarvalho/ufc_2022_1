import React, { Component } from "react";

class IMC extends Component {

    calculaIMC(peso,altura){
        return peso/(altura*altura)
    }
    
    render () {
        const {peso,altura} = this.props
        return (
            <div>
                <h2>Peso: {peso}</h2>
                <h2>Peso: {altura}</h2>
                <h2>IMC: {this.calculaIMC(peso,altura)}</h2>
                <h2>IMC: {this.calculaIMC(peso,altura).toFixed(2)}</h2>
            </div>
        )
    }
}

export default IMC