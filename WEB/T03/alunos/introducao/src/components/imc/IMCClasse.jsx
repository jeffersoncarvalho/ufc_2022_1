import React, { Component } from "react";

class IMCClasse extends Component {

    calcularIMC(altura,peso){
        return peso/(altura*altura)
    }

    resultado(imc){
        if (imc < 17) {
            return <h3>Abaixo do Peso</h3>
        }
    }

    render() {
        const {altura,peso} = this.props
        const imc = this.calcularIMC(altura,peso)
        
        return (
            <div>
                <h3>
                    A minha altura é {altura}
                    &nbsp; e o meu peso é {peso}</h3>
                <h3>
                    O meu IMC é {imc}
                </h3>
                {this.resultado(imc)}
            </div>
        )
    }
}

export default IMCClasse