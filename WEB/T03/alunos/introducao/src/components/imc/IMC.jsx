import React from "react";

const IMC = (props) => {

    function calcularIMC(altura,peso) {
        return peso/(altura*altura)
    }

    return (
        <div>
            <h3>
                A minha altura é {props.altura} 
                &nbsp; e o meu peso é {props.peso}</h3>
            <h3>
                O meu IMC é {calcularIMC(props.altura,props.peso)}
            </h3>
        </div>
    )
}

export default IMC