import React from "react";

const IMC = (props) => {

    const imc = calcularIMC(props.altura,props.peso)

    const resultado = (imc) => {
        if (imc < 17) {
            return <h3>Muito Abaixo do Peso</h3>
        }
    }

    function calcularIMC(altura,peso) {
        return peso/(altura*altura)
    }

    return (
        
        <div>
            <h3>
                A minha altura é {props.altura} 
                &nbsp; e o meu peso é {props.peso}</h3>
            <h3>
                O meu IMC é {imc}
            </h3>
            {resultado(imc)}
        </div>
    )
}

export default IMC